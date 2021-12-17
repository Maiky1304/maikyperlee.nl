import React from "react";
import ToolIcon from "./ToolIcon";

const ToolsLanguagesSection = () => {
  return (
    <div className="justify-center hidden lg:flex">
      <section className="flex flex-col mt-10 justify-center w-max">
        <h2 className="font-bold text-xl mb-3 flex justify-center">
          - Technologies I have experience with -
        </h2>
        <div className="flex gap-x-3 border-b-2 border-b-secondary-700 dark:border-b-secondary-400 pb-5 w-full justify-center">
          <div className="flex gap-x-3 pr-3 border-r-2 border-r-secondary-700 dark:border-r-secondary-400">
            <ToolIcon
              image="/assets/toolicons/vscode.png"
              name="Visual Studio Code"
            />
            <ToolIcon
              image="/assets/toolicons/intellijidea.png"
              name="IntelliJ IDEA"
            />
            <ToolIcon image="/assets/toolicons/webstorm.png" name="WebStorm" />
            <ToolIcon image="/assets/toolicons/pycharm.png" name="PyCharm" />
          </div>
          <div className="flex gap-x-3">
            <ToolIcon
              image="/assets/toolicons/mysql.png"
              name="MySQL"
              rounded
            />
            <ToolIcon
              image="/assets/toolicons/mongodb.png"
              name="MongoDB"
              rounded
            />
            <ToolIcon
              image="/assets/toolicons/spigot.png"
              name="Spigot"
              rounded
            />
            <ToolIcon
              image="/assets/toolicons/discordjs.png"
              name="Discord.js"
              rounded
            />
            <ToolIcon
              image="/assets/toolicons/react.png"
              name="React"
              rounded
            />
            <ToolIcon
              image="/assets/toolicons/nextjs.png"
              name="Next.js"
              rounded
            />
            <ToolIcon image="/assets/toolicons/expo.png" name="Expo" rounded />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex gap-x-3 justify-center">
            <ToolIcon image="/assets/toolicons/java.png" name="Java" rounded />
            <ToolIcon image="/assets/toolicons/python.png" name="Python" />
            <ToolIcon image="/assets/toolicons/html5.png" name="HTML" />
            <ToolIcon image="/assets/toolicons/css.png" name="CSS" />
            <ToolIcon
              image="/assets/toolicons/javascript.png"
              name="JavaScript"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsLanguagesSection;
