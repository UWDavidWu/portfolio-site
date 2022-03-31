import SectionHeader from "./SectionHeader"

const Contact = () => {
  return (
    
    <section id="contact">
        <SectionHeader text={"contact"} />
        <div className="contact-container">
          <div className="self-intro">
            <img src={require('../static/img/selfie.png')} width="300" height="300" alt="selfie" />
          </div>
          <div className="contact-form">
         
            <div class="space-y-12">
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Name</label>
              <input class="w-full border border-input-border bg-input px-4 py-4"/>
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Email</label>
              <input type="email" class="w-full border border-input-border bg-input px-4 py-4"/>
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">Message</label>
              <textarea type="email" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
            </div>
            <button className='send'>Send it!</button>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Contact