import React from "react";
import ReactDOM from "react-dom/client";
import StatusContainer from "./CourseStatus";
import "./index.css";

const currentURL = window.location.href;
document.addEventListener("DOMContentLoaded", onLoad);

// const pluginTagId = "extension-root";
// const existingInstance = document.getElementById("extension-root");
// if (existingInstance) {
//   console.log("existing instance found, removing");
//   existingInstance.remove();
// }

// const index = document.createElement("div");
// index.id = pluginTagId;

function getCourseId(courseDiv: Element) {
  const anchor = courseDiv.querySelector("a");
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  const courseIdMatch = href && href.match(/lessons\/(\d+)/);
  const courseId = courseIdMatch && courseIdMatch[1];

  return courseId;
}

function onLoad() {
  // We are in a lesson page
  if (currentURL.includes("schoolism.com/s/course/library/lessons")) {
    console.log("in lesson page (not implemented yet)");

    // We are in the course catalog
  } else if (currentURL.includes("schoolism.com/s/course/library")) {
    console.log("in course catalog");

    const courseDivs = document.querySelectorAll(".course-card");

    console.log("courseDivs", courseDivs);

    courseDivs.forEach((courseDiv: Element) => {
      const courseId = getCourseId(courseDiv) ?? "";

      const container = document.createElement("div");
      courseDiv.appendChild(container);

      ReactDOM.createRoot(container).render(
        <React.StrictMode>
          <StatusContainer courseId={courseId} />
        </React.StrictMode>
      );
    });
  }
}

// Check if we're on a page where the main React app should be loaded (e.g., a popup page)
// else if (currentURL.includes("some-criteria-for-main-app")) {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }

// Add any other URL checks or logic as needed

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
// const body = document.querySelector('body')
// if (body) {
//   body.append(index)
// }

// ReactDOM.createRoot(index).render(
//   <React.StrictMode>
//     <Dashboard />
//   </React.StrictMode>
// )
