
import { AiFillGithub, AiFillLinkedin, AiFillThunderbolt } from 'react-icons/ai';


const Footer = () => {
    return (
    
				<div>
				<h2 id="hire" class="secondary-title">Hire me</h2>
				<p class="section-paragraph">Feel free to to contact me any time, through any method below.</p> */}

			
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
				
    )
}

export default Footer
