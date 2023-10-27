
const ContactPage = () => {

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="max-w-md p-4 mx-auto bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
