interface TestimonialProps {
  name: string;
  rating: number;
  content: string;
}

const TestimonialCard = ({ name, rating, content }: TestimonialProps) => {
  return (
    <div className="bg-[#231A3F] p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-2 animate-on-scroll">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#7C4DFF]/20 flex items-center justify-center">
          <span className="text-white font-medium">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fas ${i < rating ? 'fa-star' : i === Math.floor(rating) && rating % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star text-gray-500'}`}></i>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300">
        "{content}"
      </p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      rating: 5,
      content: "I've tried several Minecraft hosting services, but QuantumHost is by far the best. Zero lag, easy to set up mods, and their support team is incredibly helpful."
    },
    {
      name: "Sarah Chen",
      rating: 5,
      content: "Our community of 30+ players switched to QuantumHost's premium plan, and the difference is night and day. The control panel makes management so easy!"
    },
    {
      name: "Marcus Johnson",
      rating: 4.5,
      content: "Even their budget plan outperforms premium options from other providers. We've had 100% uptime for over 6 months now. Highly recommended!"
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            What Our <span className="gradient-text">Players Say</span>
          </h2>
          <p className="text-gray-300">
            Join thousands of satisfied gamers who trust QuantumHost for their Minecraft server needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
