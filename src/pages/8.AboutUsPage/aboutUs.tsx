import s from './aboutUs.module.scss';
const AboutUsPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.header}>Welcome everyone to the About us page!</h2>
      <div className={s.content}>
        <p className={s.description}>
          We noticed how colorful and full of visual noise food sales sites are now and were
          inspired to create a website for an Italian pizzeria in a sophisticated and aesthetic
          design.
        </p>
        <p className={s.description}>
          As we progressed through each of the four sprints, our team became more and more united.
          We'd love to meet you!
        </p>
        <p className={s.description}>
          Our team has three members: Uladimir Hrydzin, Elizaveta Razumenko and Shaihali Saybulaev.
        </p>
        <p className={s.description}>
          Uladimir Hrydzin implemented the Main page, Catalog page, setting up the Commerce Tools
          API, implemented sorting algorithms, breadcrumb navigation, and adaptive layout of each
          page. It also involved writing tests after coding for each sprint and implementing many
          creative ideas.
        </p>
        <p className={s.description}>
          Elizaveta Razumenko is the team leader of our team. She made a project layout in Figma,
          set up a product catalog in Commerce Tools, and implemented sending requests to the API.
          She also implemented the layout and logic of the Detail page, Login and Registration
          pages, and Cart page. She was involved in dividing tasks and controlling each stage of
          their implementation.
        </p>
        <p className={s.description}>
          Shaihali Saybulaev carried out the basic settings of the project, helped in the
          implementation of sending requests to Commerce Tools, made the Profile page. Carried out
          the elaboration of the Catalog page and the Detailed page.
        </p>
        <p className={`${s.description} ${s.gratitude}`}>
          On behalf of our entire team, we thank the RSSchool for this incredible opportunity to
          master such a large amount of knowledge!
        </p>

        <a href='https://rs.school/' className={s.link}>
          <span className={s.logo}></span>
        </a>

        <p className={s.description}>
          Thanks to the desire to master as much information and additional skills as possible, we
          decided to write our project in React, although not a single person from the team had
          worked with it before. The most important key to success was constant interaction with
          each other. The participants did not concentrate strictly on their tasks. We were always
          ready to help each other if necessary.
        </p>

        <div className={s.profile}>
          <div className={s.description}>
            <p>The first member of our team is Uladimir.</p>
            <p>
              Uladimir was born and grew up in Minsk. Graduated from the Belarusian State Economic
              University. After some time he worked in a bank. Later he became interested in
              photography and became a reportage photographer. Currently he studying front-end
              development at RSSchool.
            </p>
            <a href='https://github.com/uladek'>
              <p>Uladimir's Github</p>
              <div className={s.github_icon}></div>
            </a>
          </div>
          <div className={s.img_uladzimir}></div>
        </div>

        <div className={`${s.profile} ${s.profile_liza}`}>
          <div className={s.img_elizaveta}></div>
          <div className={s.description}>
            <p>The second member of our team is Elizaveta.</p>
            <p>
              Elizaveta was born in Grodno, but has been living and working in Minsk for seven
              years. She graduated from the Belarusian National Technical University, got a job as a
              design engineer, but realized that she was created for something else. This is how she
              found inspiration in designing and writing code.
            </p>
            <a href='https://github.com/ElizavetaRazumenko'>
              <p>GitHub Elizabeth</p>
              <div className={s.github_icon}></div>
            </a>
          </div>
        </div>
        <div className={s.profile}>
          <div className={s.description}>
            <p>The third member of our team is Shaihali.</p>
            <p>Text for Shaihali</p>
            <a href='https://github.com/Shaihali'>
              <p>Shaihaly's GitHub</p>
              <div className={s.github_icon}></div>
            </a>
          </div>
          <div className={s.img_shaihali}></div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsPage;
