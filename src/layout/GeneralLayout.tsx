import { getCurrentUserInfoWithToken } from "@/api/login";
import { interestAtom, userAtom } from "@/atoms/user";
import Sidebar from "@/components/Sidebar";
import Spinner from "@/components/Spinner";
import { useRouter } from "@/hooks/useRouter";
import { SidebarContent } from "@/router";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface GeneralLayoutProps {
  children: React.ReactNode;
  withSidebar?: boolean;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({
  children,
  withSidebar,
}) => {
  const [userProfile, setUserProfile] = useRecoilState(userAtom);
  const setInterests = useSetRecoilState(interestAtom);
  const { routeTo } = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfoWithToken(
      getAccessTokenFromLocalStorage()
    );

    if (!userProfileResponse) {
      routeTo("/login");
      return;
    }

    setUserProfile(userProfileResponse);
    if (userProfileResponse.interests) {
      setInterests(userProfileResponse.interests);
    }
  }, []);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (!userProfile?.id) {
    return (
      <div className="general-layout">
        <div className="general-layout__body">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="general-layout">
      {withSidebar ? (
        <Sidebar
          children={children}
          sidebarContent={SidebarContent}
          userProfile={userProfile}
        />
      ) : (
        <div className="general-layout__body">{children}</div>
      )}
    </div>
  );
};

export default GeneralLayout;
