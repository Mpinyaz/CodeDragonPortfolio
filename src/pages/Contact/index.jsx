const Contact = () => {
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
    <li
      className="w-36 h-10 bg-purple-100  shadow-link-shadow
                        rounded-full gap-x-1 px-4 py-2 flex flex-row items-center mb-2"
    >
      <a className="flex items-center" href={link.url}></a>
      <img className="w-5 h-5" src={link.icon} alt={link.title} />
      {link.title}
    </li>
  ));
  return (
    <>
      <div className="bg-purple-50">
        <div className="card p-3">
          <div className="text-start gap-1">
            <h1 className="text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
              {"Let's Connect"}
            </h1>
            <p className="whitespace-wrap">
              {
                "I'm always open to new opportunities and collaborations. If you have a project in mind or want to discuss how I can contribute to your this.eam, please don't hesitate to reach out. You can find my contact information on this site."
              }
            </p>
          </div>
          <div className="">
            <ul className="gap-4">{linkList}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
