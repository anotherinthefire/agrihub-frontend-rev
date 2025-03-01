import { useState } from "react";

interface UserTabsProps {
  options: any;
}

const UserTabs = ({ options }: UserTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<(typeof options)[number]>(
    options[0]
  );

  return (
    <div className="bg-slate-100 px-1.5 w-full max-w-[27rem] rounded-md mx-auto">
      <div className="relative flex xs:w-[28rem] mx-auto h-[2.5rem] xs:h-[2.5rem] overflow-hidden">
        <div
          className={`absolute left-0 start-0 top-0 bottom-0 my-auto h-[80%] w-[calc(100%/2)]  bg-white rounded-md duration-300`}
          style={{
            translate: (options.indexOf(selectedTab) * 100) / 1 + "%"
          }}
        />

        {options.map((title: string) => {
          return (
            <button
              key={title}
              className={`${
                selectedTab === title
                  ? "text-primary"
                  : "text-slate-700 opacity-80"
              } relative h-full w-full text-sm  z-10 tracking-wide`}
              onClick={() => {
                setSelectedTab(title);
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UserTabs;
