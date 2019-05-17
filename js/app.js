// document.addEventListener('DOMContentLoaded', () => {

	const bannerTitle = document.querySelector('h1');
	const navLinks = document.querySelector('.main-nav')

	const quotes = [
		["Computer science is a top paying college degree and computer programming jobs are growing at 2X the national average.", "code.org"],
		["Less than 2.4% of college students graduate with a degree in computer science. And the numbers have dropped since last decade.", "code.org"],
		["Exposure to CS leads to some of the best-paying jobs in the world. But 75% of our population is underrepresented.", "code.org"],
		["The majority of schools don't even offer programming classes.", "code.org"],
		["Our policy at Facebook is literally to hire as many talented engineers as we can find. There just aren't enough people who are trained and have these skills today.", "Mark Zuckerberg - Founder, Facebook"],
		["Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.", "Bill Gates - Chairman, Microsoft"],
		["Coding is very important when you think about the future, where everything is going. With more phones and tablets and computers being made, and more people having access to every thing and information being shared, I think it's very important to be able to learn the language of coding and programming.", "Chris Bosh - NBA All-star, Miami Heat"],
		["Computer programmers are in great demand by American businesses, across the tech sector, banking, entertainment, you name it. These are some of the highest-paying jobs, but there are not enough graduates to fill these opportunities.", "Marco Rubio - Senator, Florida"],
		["An understanding of computer science is becoming increasingly essential in today’s world. Our national competitiveness depends upon our ability to educate our children—and that includes our girls—in this critical field.", "Sheryl Sandberg - Chief Operating Office, Facebook"],
		["Learning to code is useful no matter what your career ambitions are.", "Arianna Huffington - Founder, The Huffington Post"],
		["Technology and computers are very much at the core of our economy going forward. To be prepared for the demands of the 21st century—and to take advantage of its opportunities—it is essential that more of our students today learn basic computer programming skills, no matter what field of work they want to pursue.", "Todd Park - U.S. Chief Technology Officer"],
		["Learning to code is the single best thing anyone can do to get the most out of the amazing future in front of us.", "Marc Andreessen - Co-founder and General Partner, Andreessen Horowitz"],
		["Computers play an increasingly larger role in all fields of science; they're helping us explore outer-space and our solar system. Whether you want to become a doctor or an astronaut, it would help to learn the basics of computer programming.", "Leland Melvin - Astronaut, NASA Education Administrator"],
		["Coders change the world. They build new, amazing things faster than ever before. Anyone with imagination can learn to write code.", "Jeff Wilke - SVP Consumer Business, Amazon.com"],
		["Computer programming is the single best professional opportunity in the world. We need more Americans in the field. Let’s go!", "Steve Ballmer - CEO, Microsoft Corporation"],
		["Computer science drives innovation throughout the US economy, but it remains marginalized throughout K-12 education.", "code.org"],
		["Only 26 states allow students to count computer science courses toward high school graduation.", "code.org"],
		["There are currently [Sept. 2015] 583,155 open computing jobs nationwide.", "code.org"],
		["Last year, only 59,764 computer science students graduated into the workforce.", "code.org"],
	];

	function randomQuote() {
		let num = Math.floor(Math.random() * quotes.length);

		document.getElementById("quote-body").textContent = quotes[num][0];
		document.getElementById("quote-source").textContent = quotes[num][1];
	}

	function typeText(text, target) {
		let span = document.createElement('span');
		let _ = document.createElement('span');
		_.textContent = '_';
		target.appendChild(span);
		target.appendChild(_);

		let t = 0;
		function blinky_() {
			if(t % 2 === 0) {
				_.style.visibility = 'hidden';
			} else {
				_.style = '';
			}
			t += 1;
		}
		setInterval(blinky_, 650);

		let i = 0;
		function typeLetter() {
			if(i < text.length) {
				span.textContent += text.charAt(i);
				i++;
				setTimeout(typeLetter, Math.floor(Math.random() * 200) + 100);
			}
		}

		setTimeout(typeLetter, 1000);

	}

	navLinks.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
      let target = e.target;
      let scrollTo = '#' + target.href.split('#')[1];
      if(scrollTo === '#home') {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        document.querySelector(scrollTo).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });


	typeText('Web Development I', bannerTitle);
	randomQuote();

// });
