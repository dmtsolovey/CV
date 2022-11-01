import { useCallback, useState, useMemo } from "react";
import styles from "./Work.module.css";

export default function Work({
  role,
  company,
  date,
  responsibilities,
  // initialCount = 5,
}) {
  // const [isAllVisible, setIsAllVisible] = useState(false);

  // const visibleItems = useMemo(() => {
  //   return isAllVisible
  //     ? responsibilities
  //     : responsibilities.slice(0, initialCount);
  // }, [isAllVisible, responsibilities, initialCount]);

  // const showSeeAll = useMemo(() => {
  //   return responsibilities.length > initialCount && !isAllVisible;
  // }, [responsibilities, initialCount, isAllVisible]);

  // const onSeeAll = useCallback(() => {
  //   setIsAllVisible(true);
  // }, []);

  return (
    <div className={styles.workTitleOrganization}>
      <h4 className={styles.organizationName}>
        {role} <span className={styles.workCompany}>{company}</span>
      </h4>
      <p className={styles.workTime}>{date}</p>
      <ul className={styles.workList}>
        {responsibilities.map((item) => (
          <li key={item.description} className={styles.workListItems}>
            {item.description}
          </li>
        ))}
      </ul>
      {/* {showSeeAll && (
        <button onClick={onSeeAll} className="see-all">
          See all...
        </button>
      )} */}
    </div>
  );
}
