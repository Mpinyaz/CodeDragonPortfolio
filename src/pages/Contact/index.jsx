import "./contact.css";
import useDocumentTitle from "../../context/useDocumentTitle";
const Contact = () => {
  useDocumentTitle("Contact");
  const arrLinks = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/elton-mpinyuri-974984134/",
      icon: "src/images/linkedin-svgrepo-com.svg",
    },
    {
      title: "Github",
      url: "https://github.com/Mpinyaz",
      icon: "src/images/github.svg",
    },
    {
      title: "DEVTO",
      url: "https://dev.to/mpinyaz",
      icon: "src/images/dev-to-svgrepo-com.svg",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mpinyaz/",
      icon: "src/images/instagram.svg",
    },
    { title: "Email Me", url: "", icon: "src/images/homepage.svg" },
  ];
  const linkList = arrLinks.map((link) => (
    <div
      key={link.title}
      className="p-1 basis-1/2 sm:basis-1/3 md:basis-1/2 lg:basis-1/2 mb-4 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2"
    >
      <button className="w-full h-10 bg-purple-200  shadow-link-shadow rounded-full gap-x-2 px-4 py-2 flex flex-row items-center">
        <a
          className="flex items-center w-full gap-2 justify-center text-nowrap"
          href={link.url}
        >
          <img className="w-5 h-5" src={link.icon} alt={link.title} />
          {link.title}
        </a>
      </button>
    </div>
  ));
  return (
    <>
      <section className="flex flex-col md:flex-row bg-indigo-600 py-1  gap-3 px-3">
        <div
          id="contentlinks"
          className="contact-card basis-1/2 p-6 flex flex-col"
        >
          <div className="text-start gap-1 flex-auto">
            <h1 className="text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2">
              {"Let's Connect"}
            </h1>
            <p className="p-2 mt-4">
              {
                "I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your this team, please don't hesitate to reach out. You can find my contact information on this site."
              }
            </p>
          </div>
          <div className="flex-auto flex flex-wrap">{linkList}</div>
        </div>
        <div className="contact-card basis-1/2 p-6">
          <h1 className="text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2">
            Send me mail
          </h1>
          <form className="flex flex-col justify-center gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="border-2 border-indigo-400 p-2 rounded-lg"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-2 border-indigo-400 p-2 rounded-lg"
              placeholder="Your email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message"
              className="border-2 border-red-200 rounded-lg p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full h-10 bg-purple-200  shadow-link-shadow rounded-full gap-x-2 px-4 py-2 flex flex-row items-center justify-center font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
