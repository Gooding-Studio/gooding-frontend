import { interestAtom, userAtom } from "@/atoms/user";
import { User } from "@/types/user";
import { useRecoilValue } from "recoil";

const MyRecord = () => {
  const userProfile = useRecoilValue<User | null>(userAtom);
  const interestSet = useRecoilValue(interestAtom);
  console.log(userProfile, interestSet);
  return (
    <div>
      <h1>Page C</h1>
      <p>
        어차피 별 쓸데 없는 공간차지용 텍스트니까 그대로 두셔도 되고 아무거나
        맘에드는걸로 바꾸셔도 됩니다.
      </p>
    </div>
  );
};

export default MyRecord;