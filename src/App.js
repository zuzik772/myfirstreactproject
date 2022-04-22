// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ValueCard from "./ValueCard";
import TestimonialCard from "./TestimonialCard";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Second">
        <h2>Our services</h2>
        <h3>Where we can add value</h3>
        <div className="ValueCard-container">
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
        </div>
      </section>
      <section className="Third">
        <IntroText />
        <div className="TestimonialCard-container">
          {testimonialCards.map((testimonialCard) => (
            <TestimonialCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="bi bi-asterisk"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                </svg>
              }
              name="logoipsum"
              text={testimonialCard.text}
              author={testimonialCard.author}
              role={testimonialCard.role}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
function IntroText() {
  return (
    <div className="LeftText">
      <h2>Testimonials</h2>
      <h3>Lets hear what people says about us</h3>
      <p>
        Bla jdnaljd jiajp s jpijpamk mpajcpdc jioj uijolml ijhg ughi ohigui gigi gigifd dtdtdh jgihi
        hk i g.
      </p>
    </div>
  );
}
const testimonialCards = [
  {
    author: "Zuzanka",
    role: "myself",
    text: "What does Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua in English?",
  },
  {
    author: "Kubko",
    role: "boyfrined",
    text: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
  },
  {
    author: "Dog",
    role: "My future best friend",
    text: "The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. ",
  },
  {
    author: "Agatka",
    role: "My Mentor",
    text: "JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.",
  },
];



export default App;
