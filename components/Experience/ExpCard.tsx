const ExpCard = ({role, company, description}: any) => {
  return (
    <div
      id="latest"
      className="px-20 xs:px-4 pt-10 pb-6 rounded-midxl bg-black mt-10 lg:w-145 md:w-128"
    >
      <div
        id="border"
        className="xs:pl-2 description xs:border-0 border-l-2 -ml-3"
      >
        <div className="px-2 ">
          <h3 className="text-cyan-500 font-semibold text-2xl px-3">
            Full-Stack Developer @ ACE University of Toronto
          </h3>
          <h4 className="px-4 text-projtext/80 py-2">
            June 2022 - Present • Part-time
          </h4>
          <div id="description" className="px-10">
            <ul className="list-disc chalk pt-4 leading-flow text-md">
              <li>
                Developed a three-tier architecture web application using
                Next.js, Stripe, FireAuth and FirestoreDB
              </li>
              <li>
                Implemented a CI/CD pipeline via deployment on Vercel which was
                integrated with E2E monitoring on the deployment pipeline using
                Checkly and Next.js analytics, yielding a loaded web vital time
                of under 340ms
              </li>
              <li>
                Containerised the entire application using Docker, reducing
                setup time from 100+ minutes to under 10 minutes.
              </li>
              <li>
                Led meetings with the internal team and held standups to
                prioritise targeting optimal user/admin experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
