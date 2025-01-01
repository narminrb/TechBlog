import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import clsx from 'clsx';


const HeaderItems = ({ navbarItems }) => {
  const location = useLocation()
  return (
    <ul className="flex space-x-8">
      {
        navbarItems && navbarItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li><Link to={item.url} className={clsx("hover:text-primary px-4 py-2 transition-colors duration-300",location.pathname===item.url?"bg-blue-200 tex-blue-500 rounded-md" : "")}>{item.name}</Link></li>
            </React.Fragment>
          );
        })
      }
    </ul>
  );
};


export default HeaderItems