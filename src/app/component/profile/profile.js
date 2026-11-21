import { profile, profileSection } from "@/app/configs/ui";
import styles from "./profile.module.scss";
import classNames from "classnames/bind";
import Chacracter from "./character";
import PaperText from "../paperText/paperText";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>PROFILE</h2>
        <PaperText className={cx("des")}>{profileSection.description}</PaperText>

        <div className={cx("profiles")}>
        {profileSection.profiles.map((pro, index) => {
          return <Chacracter data={pro} key={pro.title} />;
        })}
      </div>
    </div>
  );
}

export default Profile;
