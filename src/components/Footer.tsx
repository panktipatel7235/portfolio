const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
        <p className="text-sm opacity-90">
          © {currentYear} Patel Pankti. All rights reserved.
        </p>
        <p className="text-xs opacity-75 mt-2">
          Designed & crafted with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
