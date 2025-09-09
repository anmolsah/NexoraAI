import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center">
        <h2 className="text-slate-800 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-[0_20px_25px_-5px_rgba(252,211,77,0.3),_0_8px_10px_-6px_rgba(252,211,77,0.3)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    className="w-5 h-5"
                    alt="stars"
                    src={
                      index < testimonial.rating
                        ? assets.start_svg
                        : assets.star_dull
                    }
                  />
                ))}
            </div>
            <p className="text-slate-600 text-base my-6 flex-grow">
              "{testimonial.content}"
            </p>
            <hr className="mb-6 border-gray-200" />
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-14 h-14 object-cover rounded-full"
                alt=""
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-semibold text-slate-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
