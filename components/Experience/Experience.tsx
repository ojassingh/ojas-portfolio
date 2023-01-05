
const Experience = () => {
  return (
    <div id="work" className="text-chalk pb-10 md:px-16 lg:px-40 xs:px-4">
      <h1 className=" lg:text-6xl md:text-5xl text-white text-chalk font-bold xs:text-3xl ">
        ≫ work-experience
      </h1>
      <div className="md:px-3">
        <div id="timeline" className="text-chalk grid gap-4">
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
                      Implemented a CI/CD pipeline via deployment on Vercel
                      which was integrated with E2E monitoring on the deployment
                      pipeline using Checkly and Next.js analytics, yielding a
                      loaded web vital time of under 340ms
                    </li>
                    <li>
                      Containerised the entire application using Docker,
                      reducing setup time from 100+ minutes to under 10 minutes.
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
          <div
            id="2"
            className="px-20 xs:px-4 pt-10 pb-6 rounded-midxl bg-black lg:w-145 md:w-128"
          >
            <div
              id="border"
              className="xs:pl-2 description xs:border-0 border-l-2 -ml-3"
            >
              <div className="px-2 ">
                <h3 className="text-cyan-500 font-semibold text-2xl px-3">
                  Machine Learning Engineer @ Omdena
                </h3>
                <h4 className="px-4 text-projtext/80 py-2">
                  Sept 2020 - Dec 2020 • Part-time
                </h4>
                <div id="description" className="px-10">
                  <ul className="list-disc chalk pt-4 leading-flow text-md">
                    <li>
                      Researched parameters of economic well-being using
                      surveys, Sentinel-2 satellite imagery, and Open Street
                      Map.
                    </li>
                    <li>
                      Pre-processed data by refactoring survey data, and
                      applying z-score standardisation using scikit-learn.
                    </li>
                    <li>
                      Implemented Principal Component Analysis (PCA) using
                      scikit-learn to compress a 12-dimensional parameter space
                      to 2-dimensional parameter space, capturing 93% of
                      variance from the PCA with minimal information loss.
                    </li>
                    <li>
                      Led a sprint with 5 engineers as scrum-master using Jira,
                      and presented findings to the senior engineers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="3" className="">
            <div
              id=""
              className="px-20 xs:px-4  py-10 rounded-midxl bg-black lg:w-145 md:w-128"
            >
              <div
                id="border"
                className="xs:pl-2 description xs:border-0 border-l-2 -ml-3"
              >
                <div className="px-2">
                  <h3 className="text-cyan-500 font-semibold text-2xl px-3">
                    Data Science Intern @ MEIT
                  </h3>
                  <h4 className="px-4 text-projtext/80">
                    Sept 2020 - Dec 2020 • Full-time{" "}
                  </h4>
                  <div id="description" className="px-10">
                    <ul className="list-disc text-chalk pt-4 leading-flow text-md">
                      <li>
                        Pre-processed dataset of 8000+ images of cards by
                        cleaning, feature-extracting, and segmenting via
                        scikit-image.
                      </li>
                      <li>
                        Utilised Faster R-CNN to extract region-proposals and to
                        classify handwriting via its own support vector machine
                      </li>
                      <li>
                        Communicated closely with other interns and senior data
                        scientists with best practices of Agile development.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
