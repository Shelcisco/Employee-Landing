import React from "react";
import BsPic1 from './BsPic1.png';
import BsPic2 from './BsPic2.png';
import BsPic3 from './BsPic3.png';
import BsPic4 from './BsPic4.png';
import BsPic5 from './BsPic5.png';

export default function Bs() {
  return (

<div className="best">


<button className="FavButt">Add to Favorites</button>


<div className= "BsTitle"><h1>How to Be a Successful Salesperson</h1></div>    
<br></br>
<div className="bs1">
  
<img src={BsPic1} width={728} height={546} alt="bsp"></img>
<div className="Bstext">
<p><b>Love your job.</b> You'll never succeed in sales, or in any job, if you don't love what you do. The best salespeople love the struggle of gaining sales leads, talking and listening to prospects, and closing the sale. Only by truly wanting to be there can you put in the extra work and effort required to be the best of the best. If you don't already love your job or the product you are selling, quit and sell something else. You may not make money initially, but your hard work will pay off eventually.</p>
</div>
</div>
<hr></hr>
<div className="bs2">
<img src={BsPic2} width={728} height={546} alt="bsp"></img>    
<h2>2</h2><p> <b>Work on your assertiveness.</b> Salespeople walk a delicate line between making a prospect realize that they need a product and trying not to be overly forceful. By being assertive, rather than aggressive or passive, in your statements and questions to prospects, you can move the conversation forward without making them angry or defensive. Assertive statements get your point across directly and clearly without threatening the prospect. For example:

A passive question would be, "Is there any way you could let me know when we can meet again?"
An aggressive statement would be, "You've got five seconds to make a decision before I walk out."
An assertive statement would be, "Let's meet again next week. Think about my offer and have a decision ready by then."</p>
</div>
<hr></hr>
<div className="bs3">
<img src={BsPic3} width={728} height={546} alt="bsp"></img>
<h2>3</h2><p> Strive to improve. You should always be assessing what you're doing right and using that improving upon your sales process. The best thing you can do for yourself is to keep learning and improving over the years. You should read books related to sales, attend industry seminars, listen to podcasts, and follow famous salespeople who inspire you on social media. Immerse yourself in learning and your field and you will learn skills and new developments that you can use to further your own goals.</p>
</div>
<hr></hr>
<div className="bs4">
<img src={BsPic4} width={728} height={546} alt="bsp"></img>   
<h2>4</h2><p>Model your behavior on other successful salespeople. Start by imitating the best salespeople at your company. What do they do? How do they talk to people? Ask them for tips and advice. Older salespeople, those close to retirement, are often very willing to help newcomers. You can also search for blog posts and seminars by highly successful salespeople and modify your behavior to match theirs</p>
</div>
<hr></hr>
<div className="bs5">
<img src={BsPic5} width={728} height={546} alt="bsp"></img>    
<h2>5</h2><p> Set ambitious goals for yourself. Even if the company you work for has set goals for you, set your own even higher. Work to be the best salesperson in your company. The competition will drive you to innovate and work harder. When you have success, set your goals even higher. Even when you think you've reached a plateau, you can always do at least a little bit better.</p>

</div>



</div>



 );
}