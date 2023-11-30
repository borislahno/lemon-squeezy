import Number from './components/Number';
import guideO1 from '../../assets/images/guide/guide-01.png';
import guideO2 from '../../assets/images/guide/guide-02.png';
import guideO3 from '../../assets/images/guide/guide-03.png';
import guideO4 from '../../assets/images/guide/guide-04.png';

// Ideally, there should be images for displays with different pixel densities and for different types of devices. Format webp.
const Guides: React.FC = () => {

  return (
    <section className="flex justify-center h-full ml-[264px] mt-[90px] px-[40px] pb-[130px]">
      <div className='flex-[700px] grow-0'>
        <h1 className="mb-[8px] heading-primary text-center">User manual</h1>
        <div className="mb-[50px] text-sm font-normal text-black-300 text-center">
          In this guide you will find brief information about using the application
        </div>
        <div className="flex flex-col gap-[34px]">
          <div className="flex gap-[24px]">
            <Number>1</Number>
            <div className="text">
              <h2 className="heading-secondary">Add a monthly report</h2>
              <p>
                With the help of the monthly report, you can track your income and expenses, as well as the total amount of savings in UAH, USD and EUR.
              </p>
              <div className="relative w-full pb-[54%] my-[20px] border-[1px] rounded-md overflow-hidden">
                <img className="adaptive-image" src={guideO1} alt="Lemon Squeezy home page"/>
              </div>
              <p>
                You can add a monthly report in three ways:
              </p>
              <ol className="mt-[8px] list-decimal [&>li]:ml-[30px]">
                <li>By going to the <span className="text-purple-400">Report</span> page.</li>
                <li>By clicking the <span className="text-purple-400">+</span> button in the upper right corner of the home page.</li>
                <li>Select <span className="text-purple-400">+ Add a new report</span> in the drop-down menu in the lower left corner of the page.</li>
              </ol>
              <div className="relative w-full pb-[54%] my-[20px] border-[1px] rounded-md overflow-hidden">
                <img className="adaptive-image" src={guideO2} alt="Lemon Squeezy home page"/>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>2</Number>
            <div className="flex-auto text">
              <h2 className="heading-secondary">Report fields</h2>
              <p className="text">
                To add a report, you must fill in all mandatory fields marked with <sup className="text-pink">*</sup>:
              </p>
              <p>
                You can add a monthly report in three ways:
              </p>
              <ol className="mt-[8px] list-decimal [&>li]:ml-[30px]">
                <li>Select the month for which you want to add a report.</li>
                <li>Enter the amount of income for the selected month.</li>
                <li>Add different expense categories and click the <span className="text-purple-400">Create</span> button.</li>
              </ol>
              <div className="relative w-full pb-[54%] my-[20px] border-[1px] rounded-md overflow-hidden">
                <img className="adaptive-image" src={guideO3} alt="Lemon Squeezy report page"/>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>3</Number>
            <div className="text">
              <h2 className="heading-secondary">Cost categories</h2>
              <p>
                You can add an expense category to the report by clicking the <span className="text-purple-400">+ Add new category button</span>.
              </p>
              <p>
                A drop-down list will open in which you can select the proposed standard categories or add your own.
                To add your own category, enter the name of the category and press Enter.
                To delete a category, click on the trash can icon to the left of the category.
              </p>
              <div className="relative w-full pb-[43%] my-[20px] border-[1px] rounded-md overflow-hidden">
                <img className="adaptive-image" src={guideO4} alt="Lemon Squeezy report page"/>
              </div>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <Number>4</Number>
            <div className="text">
              <h2 className="heading-secondary">Technologies used</h2>
              <p>The following technologies were used to create the application:</p>
              <ul className="flex flex-col gap-[4px] mt-[12px] ml-[12px]">
                <li><b>Typescript</b> - programming language with strict data typing;</li>
                <li><b>React.js</b> - library for creating user interfaces;</li>
                <li><b>Redux, Redux Toolkit</b> - state manager and a package that facilitates work with it;</li>
                <li><b>React Hook Form</b> - performant, flexible and extensible forms with easy-to-use validation;</li>
                <li><b>Tailwindcss</b> - a utility-first CSS framework for styling elements;</li>
                <li><b>Headless UI</b> - completely unstyled, fully accessible UI components;</li>
                <li><b>React Data Picker</b> - a simple and reusable datepicker component for React;</li>
                <li><b>Date-fns</b> - simple and consistent toolset for manipulating JavaScript dates in a browser;</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Guides;