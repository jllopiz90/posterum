import React, { useEffect, useState } from "react";

import RangeInput from "../components/elements/RangeInput";
import { useIntersectionObserver } from "../functions/scroll-animations/watchElementsIntoView";
import * as styles from "../css/html.module.css";

let intervalId: NodeJS.Timeout;
function makeProgressGo() {
  intervalId = setInterval(() => {
    //@ts-ignore
    if (document.getElementById("test").value === 100) {
      //@ts-ignore
      document.getElementById("test").value = "0";
    } else {
      //@ts-ignore
      document.getElementById("test").value += 1;
    }
  }, 30);
}

function makeProcessStop() {
  if (!!intervalId) clearInterval(intervalId);
}

function HTMLPage() {
  const { init } = useIntersectionObserver();
  const [progressOn, setProgressOn] = useState(false);

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h2>Uncommon HTML tags</h2>
      <div className={styles.description}>
        <p>
          I'm asuming you know the most basics and used HTML tags:
          <cite className={styles.citeWithBackground}>
            &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, &lt;div&gt;, &lt;p&gt;,
            &lt;input&gt;, &lt;form&gt;, &lt;button&gt;, &lt;span&gt;,
            &lt;h1&gt;, &lt;img&gt;, &lt;script&gt;, &lt;header&gt;,
            &lt;main&gt;, &lt;footer&gt;, ...
          </cite>{" "}
          In the case you are really new to HTML, those will be the first tags
          you will learn and there's plenty info about them out there.
        </p>
        <p>
          Below there's a list of tags I believe are more uncommon, but useful
          as well.
        </p>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>This is a &lt;cite&gt;:</p>
        <cite>
          I already used the <code>&lt;cite&gt;</code> above, just like I'm
          doing now 👀.
        </cite>
        <p>
          Allows you to define the text inside of the element as a reference.
          Typically the browser will render the text inside of the &lt;cite&gt;
          tag in italics, but this can be changed with a touch of CSS.
        </p>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>
          The HTML &lt;optgroup&gt; element creates a grouping of options within
          a &lt;select&gt; element.
        </p>
        <p>This is a select using "&lt;optgroup&gt;"</p>
        <label htmlFor="showtimes">Showtimes:</label>
        <select
          id="showtimes"
          name="showtimes"
          style={{ width: 200, marginLeft: 10 }}
        >
          {" "}
          <optgroup label="1PM"></optgroup>{" "}
          <option value="titanic">Twister</option>{" "}
          <option value="nd">Napoleon Dynamite</option>{" "}
          <option value="wab">What About Bob?</option>{" "}
          <optgroup label="2PM"></optgroup>{" "}
          <option value="bkrw">Be Kind Rewind</option>{" "}
          <option value="stf">Stranger Than Fiction</option>{" "}
        </select>
        <p>Code:</p>
        <code>
          &lt;select id="showtimes" name="showtimes"&gt;<br></br> &lt;optgroup
          label="1PM"&gt;&lt;/optgroup&gt; <br></br> &lt;option
          value="titanic"&gt;Twister&lt;/option&gt; <br></br> &lt;option
          value="nd"&gt;Napoleon Dynamite&lt;/option&gt; <br></br> &lt;option
          value="wab"&gt;What About Bob?&lt;/option&gt; <br></br>
          &lt;optgroup label="2PM"&gt;&lt;/optgroup&gt; <br></br>
          &lt;option value="bkrw"&gt;Be Kind Rewind&lt;/option&gt; <br></br>
          &lt;option value="stf"&gt;Stranger Than Fiction&lt;/option&gt;{" "}
          <br></br>
          &lt;/select&gt;<br></br>
        </code>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>In the next line Twitter is within an &lt;tabbr&gt; tag</p>
        <p>
          The microblogging site <abbr title="Founded in 2006"> Twitter</abbr>{" "}
          has recently struggled with downtimes.
        </p>
        <p style={{ display: "flex", flexWrap: "wrap" }}>
          Represents an abbreviation or acronym; the optional title attribute
          can provide an expansion or description for the abbreviation. If
          present, title must contain this full description and nothing else.
        </p>
        <cite className={styles.note}>
          note: In a mobile device the full description will not be showing up
          since there's not hover event.
        </cite>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>
          The HTML &lt;address&gt; element indicates that the enclosed HTML
          provides contact information for a person or people, or for an
          organization.
        </p>
        <address>
          You can contact author at{" "}
          <a href="http://www.somedomain.com/contact">www.somedomain.com</a>. If
          you see any bugs, please{" "}
          <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.
          <br></br>
          You may also want to visit us:<br></br>
          Mozilla Foundation<br></br>
          331 E Evelyn Ave<br></br>
          Mountain View, CA 94041<br></br>
          USA
        </address>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>&lt;ins&gt; and &lt;del&gt; tags</p>
        <p>
          If you're wanting to display editing revisions with with markup,
          &lt;ins&gt; and &lt;del&gt; are just the ticket. Like the name
          implies, ins highlights what's been added to the document with an
          underline, and del shows what's been taken out with a strikethrough.
        </p>
        <p>
          John <del>likes</del> <ins>LOVES</ins> his new iPod.
        </p>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <p>&lt;hgroup&gt; tag</p>
        <p>
          This tag can regroup multiple headings in a document. This way, none
          of the secondary children in this group will create separate sections
          of their own.
        </p>
        <hgroup>
          <h1>Calculus I</h1>
          <h2>Fundamentals</h2>
        </hgroup>
        <p className="pFirstLetter">
          This course will start with a brief introduction about the limit of a
          function.
        </p>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <button
          onClick={() => {
            !progressOn ? makeProgressGo() : makeProcessStop();
            setProgressOn(!progressOn);
          }}
        >
          {!progressOn ? "Go" : "Stop"}
        </button>
        <p>
          The &lt;progress&gt; element represents the completion progress of a
          task. A progress element must have both a start tag and an end tag.
        </p>
        <progress id="test" value="10" max="100"></progress>
        <p>
          This element is a little tricky to style so I advice to research about
          it, you can start with this article: <br></br>
          <a
            href="https://css-tricks.com/html5-progress-element/"
            target="_new"
          >
            The HTML5 progress Element
          </a>
        </p>
      </div>
      <div
        className={styles.tagDesc}
        data-scroll="fade-in"
        data-scroll-duration="1000"
        dat-scroll-delay="400"
        data-scroll-easing="ease"
      >
        <div style={{ width: "80%", padding: "10px 30px" }}>
          <RangeInput value={200} max={200} id="example" />
          <p>
            What you see above is an slider built using an input with type range
            and some few divs.
          </p>
          <p>You can use the raw input and it will look like this:</p>
          <input type="range" min="0" max="100" />
          <p>
            There's an issue with this, if you go to another browser most
            probable you will found a pretty different input range. Style it to
            be consistent accross browser is a real nightmare you can look at
            this links if you want try it anyway:
          </p>
          <a
            href="https://css-tricks.com/sliding-nightmare-understanding-range-input/"
            target="_new"
          >
            A Sliding Nightmare: Understanding the Range Input
          </a>
          <br />
          <a
            href="https://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html"
            target="_new"
          >
            How to Style Input Type Range in Chrome, Firefox, and IE
          </a>
          <br />
          <a
            href="https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/"
            target="_new"
          >
            Styling Cross-Browser Compatible Range Inputs with CSS
          </a>
          <br />
          <p>
            I personally found a lot easier just build it with some divs
            wrapping the input.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HTMLPage;
