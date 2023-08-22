import React from "react";
import Link from "next/link";
import {
  SiNotion,
  SiTrello,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiJenkins,
  SiGithub,
  SiGrafana,
  SiNginx,
  SiJirasoftware,
} from "react-icons/si";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center p-4 md:p-8 md:mt-20">
        <div class="grid grid-flow-row auto-rows-max">
          <div className="max-w-3xl mx-auto md:text-center">
            <div>
              <h1 className="text-xl md:text-5xl font-bold mb-4">Ohayou!</h1>
              <p className="text-md md:text-xl md:text-justify">
                I'm passionate about startups and technology for almost 6 years
                and currently working as a DevOps Engineer for an Digital Nayaka
                Abhinaya and Freelancer at Private Company. And I've been
                crushing it in the social media marketing both web2 and web3 for
                over 3 years. I was responsible for project and marketing
                management for various projects.
              </p>
              <br />
              <br />
              <Link
                href="/about"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg  md:text-xl"
                style={{
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                More About Me !
              </Link>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-4 md:p-8 mt-10 text-start">
            <div className="grid md:grid-cols-3 gap-10">
              <div
                className="p-4 rounded-lg w-full md:w-80 flex flex-col"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold">Project Management</div>
                <p>
                  Overseeing a project from{" "}
                  <span className="text-orange-500 font-bold">
                    start to finish
                  </span>
                  , ensuring that it is completed on time, within budget, and to
                  the satisfaction of stakeholders.
                </p>
                <div className="flex justify-center m-2">
                  <SiNotion className="text-3xl m-2" />
                  <SiTrello className="text-3xl m-2" />
                  <SiJirasoftware className="text-3xl m-2" />
                </div>
              </div>

              <div
                className="p-4 rounded-lg w-full md:w-80"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold">WEB Development</div>
                <p>
                  Create a{" "}
                  <span className="text-orange-500 font-bold">
                    responsive web
                  </span>{" "}
                  from scratch to deploy using frameworks such as React, Vue,
                  Next, Tailwind etc. according to user needs.
                </p>
                <div className="flex justify-center m-2">
                  <SiReact className="text-3xl m-2" />
                  <SiVuedotjs className="text-3xl m-2" />
                  <SiNextdotjs className="text-3xl m-2" />
                  <SiExpress className="text-3xl m-2" />
                </div>
              </div>
              <div
                className="p-4 rounded-lg w-full md:w-80"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold">DevOps</div>
                <p>
                  <span className="text-orange-500 font-bold">
                    Build architecture
                  </span>{" "}
                  on servers as per needs and costs. using several tools such as
                  Docker, Jenkins, Grafana, Nginx, Kong etc.
                </p>
                <div className="flex justify-center m-2">
                  <SiDocker className="text-3xl m-2" />
                  <SiJenkins className="text-3xl m-2" />
                  <SiGithub className="text-3xl m-2" />
                  <SiGrafana className="text-3xl m-2" />
                  <SiNginx className="text-3xl m-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
