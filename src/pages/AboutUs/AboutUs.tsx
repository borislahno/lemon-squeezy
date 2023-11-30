import Number from '../Guides/components/Number';
import teami from '../../assets/images/aboutUs/teami.png';
import teamiMarketing from '../../assets/images/aboutUs/teami-marketing.png';
import teamiCms from '../../assets/images/aboutUs/teami-cms.png';
import teamiResponded from '../../assets/images/aboutUs/teami-responded.png';

const SKILLS: string[] = [
  'JavaScript', 'Typescript', 'React.js', 'Next.js', 'Redux', 'GraphQL', 'Apollo Client', 'Urql Client', 'REST', 'Git', 'nmp/yarn', 'webpack',
  'CSS', 'HTML', 'SASS/CSS', 'Emotion', 'Framer Motion', 'Tailwind CSS', 'Styled Components', 'Chakra UI', 'CSS modules', 'Material Ui', 'Ant Design', 'BEM'
]

const AboutUs: React.FC = () => {

  return (
    <section className="flex justify-center h-full ml-[264px] mt-[90px] px-[40px] pb-[130px]">
      <div className='flex-[700px] grow-0'>
        <h1 className="mb-[8px] heading-primary text-center">About Us</h1>
        <div className="mb-[50px] text-sm font-normal text-black-300 text-center">
          Borys Lahno, Front End Developer
        </div>
        <div className="flex flex-col gap-[34px]">
          <div className="flex gap-[24px]">
            <Number>1</Number>
            <div className="text">
              <h2 className="heading-secondary">Profile</h2>
              <p>
                Creative and forward-thinking React.js and Next.js Developer with experience able to create cutting-edge SaaS and web applications for high-profile clients with challenging demands and
                visions. High scheduling and code verification skills.<br/>
                I became interested in front-end development two years ago. Of those two years, half of the year was spent studying and immersing myself in the field of user interface development, and
                the rest was commercial experience. I have a year and a half of practical experience in efficient coding of websites and applications using modern technologies such as React or Next.
                During this time, I had the opportunity to work with many libraries/frameworks for styling components.<br/>
                I try to write clean, optimized and reusable code. I am constantly interested in
                something new and follow changes in technology. I have a desire to study patterns and architecture in depth.
              </p>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>2</Number>
            <div className="text">
              <h2 className="heading-secondary">Experience</h2>
              <div className="flex flex-col mt-[14px] text-sm text-black-300 font-bold">
                Junior Frontend Developer, WeRdevs, Kyiv
                <span className="text-xs text-grey-500 font-medium">JULY 2022 - SEPTEMBER 2022</span>
              </div>
              <div className="flex flex-col mt-[8px] text-sm text-black-300 font-bold">
                Strong Junior Frontend Developer, Teami, London
                <span className="text-xs text-grey-500 font-medium">
                  OCTOBER 2022 - PRESENT
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>3</Number>
            <div className="text">
              <h2 className="heading-secondary">Skills</h2>
              <div className="flex justify-between gap-[34px] w-[400px] mt-[20px]">
                <ul className="flex flex-col gap-[4px]">
                  {SKILLS.slice(0, 12).map((skill, index) => (
                    <li key={index} className="">{skill}</li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-[4px]">
                  {SKILLS.slice(12).map((skill, index) => (
                    <li key={index} className="">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>4</Number>
            <div className="text">
              <h2 className="heading-secondary">Portfolio</h2>
              <div className="flex flex-col gap-[24px] mt-[24px]">
                <div className="flex gap-[16px]">
                  <div className="relative flex-[250px] grow-0 shrink-0 pb-[21.1%] max-h-[134px]">
                    <img className="adaptive-image" src={teami} alt="Teami application"/>
                  </div>
                  <div className="flex-auto">
                    <div className="text-sm text-black-300 font-semibold">Teami application</div>
                    <div className="mb-[4px]">
                      Teami - responsive SaaS application. Create a project, manage a team, add timesheets, generate reports and track revenue.
                    </div>
                    <div>
                      React.js, Typescript, GraphQL,URQL client,SCSS,CSS modules, Responsive Pixel Perfect Design implementation.
                    </div>
                    <a className="mt-[6px] text-blue-600" href="https://app.teami.io/" target="_blank">https://app.teami.io/</a>
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <div className="relative flex-[250px] grow-0 shrink-0 pb-[21.1%] max-h-[134px]">
                    <img className="adaptive-image" src={teamiMarketing} alt="Teami application"/>
                  </div>
                  <div className="flex-auto">
                    <div className="text-sm text-black-300 font-semibold">Teami marketing website</div>
                    <div>
                      Next.js, Typescript, GraphQL,Apollo client, Tailwind Css, Responsive Pixel Perfect Design implementation.
                    </div>
                    <a className="mt-[6px] text-blue-600" href="https://teami.io/" target="_blank">https://teami.io/</a>
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <div className="relative flex-[250px] grow-0 shrink-0 pb-[21.1%] max-h-[134px]">
                    <img className="adaptive-image" src={teamiCms} alt="Teami application"/>
                  </div>
                  <div className="flex-auto">
                    <div className="text-sm text-black-300 font-semibold">Teami CMS</div>
                    <div>
                      React.js, Typescript, GraphQL,URQL client, Responsive Pixel Perfect Design implementation.
                    </div>
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <div className="relative flex-[250px] grow-0 shrink-0 pb-[21.1%] max-h-[134px]">
                    <img className="adaptive-image" src={teamiResponded} alt="Teami application"/>
                  </div>
                  <div className="flex-auto">
                    <div className="text-sm text-black-300 font-semibold">Teami CMS</div>
                    <div>
                      Next.js, Typescript, Tailwind Css, Responsive Pixel Perfect Design implementation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;