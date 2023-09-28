import React, { forwardRef, useRef, useImperativeHandle } from "react";


const AboutMe = forwardRef((props, ref) => {
  const divRef = useRef<HTMLDivElement | null>(null);


  useImperativeHandle(ref, () => {
    return {
      scroll() {
        if (divRef.current) {
          divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  }, []);

  return (
    <div className="flex-center flex-col w-full mt-5" ref={divRef}>
      <h2 className="text-4xl mt-1 mb-5">ABOUT ME</h2>
      <p className="max-w-3xl text-center leading-8 tracking-wider">
        <p>As a dedicated and adaptable skillled frontend engineer</p>
        <p>
          Graduated with a master's degree in computer engineering. Software
          branch
        </p>
        <p>
          With a strong commitment to excellence, I thrive in fostering
          inter-team coordination.
        </p>
        <p>
          {" "}
          Challenges excite me and I have a passion for solving complex problems
          and
        </p>
        <p>debugging issues to create seamless user experiences</p>
      </p>
    </div>
  );
});

export default AboutMe;
