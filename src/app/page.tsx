import React from "react";
import Link from "next/link";
import {
  SiNotion,
  SiTrello,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiAnsible,
  SiSonarqube,
  SiJirasoftware,
} from "react-icons/si";
import { FaGolang, FaRust } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center p-4 md:p-8 md:mt-20">
        <div className="grid grid-flow-row auto-rows-max">
          
          {/* --- HERO SECTION --- */}
          <div className="max-w-3xl mx-auto md:text-center">
            <div>
              <h1 className="text-xl md:text-5xl font-bold mb-4">Ohayou!</h1>
              <p className="text-md md:text-xl md:text-justify mb-10">
                For almost 7 years, I've been living at the intersection of innovative
                technology and the dynamic startup ecosystem. My mission is to
                empower developers. I build the{" "}
                <span className="text-orange-500 font-bold">
                  'highways' automated and scalable infrastructure
                </span>
                , so that brilliant ideas can launch into production quickly and safely.
              </p>
              
              <Link
                href="/about"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg md:text-xl transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                style={{
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                More About Me !
              </Link>
            </div>
          </div>

          {/* --- EXPERTISE SECTION --- */}
          <div className="max-w-5xl mx-auto p-4 md:p-8 mt-10 text-start">
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Kartu 1: Project Management */}
              <div
                className="p-6 rounded-lg w-full md:w-80 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold text-xl mb-2">Project Management</div>
                <p>
                  Overseeing a project from{" "}
                  <span className="text-orange-500 font-bold">
                    start to finish
                  </span>
                  , ensuring that it is completed on time, within budget, and to
                  the satisfaction of stakeholders.
                </p>
                <div className="flex justify-center mt-auto pt-4">
                  <SiNotion className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiTrello className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiJirasoftware className="text-3xl m-2 transition-colors hover:text-orange-500" />
                </div>
              </div>

              {/* Kartu 2: WEB Development */}
              <div
                className="p-6 rounded-lg w-full md:w-80 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold text-xl mb-2">WEB Development</div>
                <p>
                  Create a <span className="text-orange-500 font-bold">WEB</span>{" "}
                  from scratch to deploy using frameworks such as Next, Express,
                  Golang, Rust. according to user needs.
                </p>
                <div className="flex justify-center mt-auto pt-4">
                  <SiNextdotjs className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiExpress className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <FaGolang className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <FaRust className="text-3xl m-2 transition-colors hover:text-orange-500" />
                </div>
              </div>

              {/* Kartu 3: DevOps & DevSecOps */}
              <div
                className="p-6 rounded-lg w-full md:w-80 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "#fefae0",
                  boxShadow:
                    "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
                }}
              >
                <div className="font-bold text-xl mb-2">DevOps & DevSecOps</div>
                <p>
                  <span className="text-orange-500 font-bold">
                    Build architecture
                  </span>{" "}
                  on servers as per needs and costs. using several tools such as
                  Docker, Kubernetes, Jenkins, Ansible, Sonarqube etc.
                </p> {/* <--- PERBAIKAN DI SINI */}
                <div className="flex justify-center flex-wrap mt-auto pt-4">
                  <SiDocker className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiKubernetes className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiJenkins className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiAnsible className="text-3xl m-2 transition-colors hover:text-orange-500" />
                  <SiSonarqube className="text-3xl m-2 transition-colors hover:text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}