import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";
import Navbar from "./Navbar";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCopy,
  faLink,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("topLinks");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.inopenapp.com/api/v1/dashboardNew",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MjcsImlhdCI6MTY3NDU1MDQ1MH0.dCkW0ox8tbjJA2GgUx2UEwNlbTZ7Rr38PVFJevYcXFI",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null;

  const handleWhatsAppCall = (number) => {
    // Implement WhatsApp call functionality here
    // console.log("WhatsApp call to:", number);
  };

  const handleCopy = (link) => {
    // Implement copy link functionality here
    // console.log("Copy link:", link);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:text-center">
            <h6 className="text-xl mb-4 font-thin lg:text-center xl:mb-0">
              Good Morning
            </h6>
            <h3 className="text-xl mb-4 font-bold lg:text-center lg:mb-0">
              Ajay Manva !
            </h3>
          </div>
        </div>
      </div>
      <Chart data={data} />
      <br />
      <br />
      <Info />
      <br />
      <br />

      {/* View Analytics button */}
      <div className="flex items-center justify-center">
        <div className=" rounded-xl border border-gray-500 p-1">
          <button className="font-semibold text-xl bg-white px-8 py-2 rounded-2xl flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            View Analytics
          </button>
        </div>
      </div>

      {/* switch tab */}
      <div className="rounded-3xl mx-4 md:mx-auto max-w-screen-md mt-16">
      <div className="p-2 rounded-t-lg">
        <div className="space-x-4">
          <button
            className={`px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-500 focus:outline-none tab-button ${
              activeTab === "topLinks" ? "bg-blue-500" : ""
            }`}
            onClick={() => handleTabChange("topLinks")}
          >
            Top Links
          </button>
          <button
            className={`px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-500 focus:outline-none tab-button ${
              activeTab === "recentLinks" ? "bg-blue-500" : ""
            }`}
            onClick={() => handleTabChange("recentLinks")}
          >
            Recent Links
          </button>
        </div>
      </div>

      {/* Top Link cards */}
      <div id="toplink" style={{ display: activeTab === "topLinks" ? "block" : "none" }}>
        {data.data.top_links.map((link, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <img src={link.original_image} alt="App Icon" className="w-16 h-16 mr-2 rounded-2xl" />
              <div>
                <div className="text-lg font-medium text-gray-800">{link.app}</div>
                <div className="text-gray-600">
                  {new Date(link.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div className="text-gray-600">{link.total_clicks} <br /> Clicks</div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center justify-between">
              <a href={link.web_link} target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:text-blue-800 ${window.innerWidth < 768 && "underline"} visited:text-purple-600`}>
                {window.innerWidth >= 768
                  ? link.web_link
                  : link.web_link.length > 25
                  ? `${link.web_link.substring(0, 25)}...`
                  : link.web_link}
              </a>
              <FontAwesomeIcon
                icon={faCopy}
                className="cursor-pointer text-blue-500 hover:text-blue-800"
                style={{ fontSize: "1.7rem" }}
                onClick={() => handleCopy(link.web_link)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Link cards */}
      <div id="recentlink" style={{ display: activeTab === "recentLinks" ? "block" : "none" }}>
        {data.data.recent_links.map((link, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-4 mb-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <img src={link.original_image} alt="App Icon" className="w-16 h-16 mr-2 rounded-2xl" />
              <div>
                <div className="text-lg font-medium text-gray-800">{link.app}</div>
                <div className="text-gray-600">
                  {new Date(link.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div className="text-gray-600">{link.total_clicks} <br /> Clicks</div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center justify-between">
              <a href={link.web_link} target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:text-blue-800 ${window.innerWidth < 768 && "underline"} visited:text-purple-600`}>
                {window.innerWidth >= 768
                  ? link.web_link
                  : link.web_link.length > 25
                  ? `${link.web_link.substring(0, 25)}...`
                  : link.web_link}
              </a>
              <FontAwesomeIcon
                icon={faCopy}
                className="cursor-pointer text-blue-500 hover:text-blue-800"
                style={{ fontSize: "1.7rem" }}
                onClick={() => handleCopy(link.web_link)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>    
      <br />
      <br />

      {/* View All Links */}
      <div className="flex items-center justify-center">
        <div className="rounded-xl border border-gray-500 p-1">
          <button className="font-semibold text-xl bg-white px-8 py-2 rounded-2xl flex items-center">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            View All Links
          </button>
        </div>
      </div>
      <br />

      {/* Talk With WhatsApp */}
      <div className="flex items-center justify-center">
        <div className="rounded-xl border border-gray-500 p-1">
          <button
            className="font-semibold text-xl bg-white px-8 py-2 rounded-2xl flex items-center"
            style={{ color: "green" }}
            onClick={() => handleWhatsAppCall(data.support_whatsapp_number)}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Talk With Us
          </button>
        </div>
      </div>
      <br />

      {/* Frequently Asked Questions */}
      <div className="flex items-center justify-center">
        <div className="rounded-xl border border-gray-500 p-1">
          <button
            className="font-semibold text-xl bg-white px-8 py-2 rounded-2xl flex items-center"
            style={{ color: "#0E6FFF" }}
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
            FAQ's
          </button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default App;
