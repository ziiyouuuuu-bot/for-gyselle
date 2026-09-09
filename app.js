const PASSWORD = '20072011';
const questions = [
['如果她是一种花？','玫瑰。玫瑰的花语是爱与美，她身上的爱和美源自于自己，并非身边的任何一个人。希望她未来可以像玫瑰一样，有让人看了就一眼难忘的美丽而张扬，更像玫瑰花上的尖刺，有不容任何伤害的坚韧和独立。'],
['她最烦人的地方是什么？','回信息速度太慢。慢得如果我是她的恋爱对象，大概会为此而闹很多别扭甚至提分手。虽然有时候有点摸不着头脑到底为什么回信息的速度可以这么慢，但还是有点为自己的包容感到骄傲，希望她的这点可以略有改善，不要太多，进步10%就可以，我怕我会不习惯。'],
['希望十年后的她是怎样的？','活出了无法丈量的美丽与珍贵。没有大成就也没关系，没有让人羡慕也没关系，这十年来我会在她身边，我会知道她成长了多少、进步了多少、收获了多少、努力了多少。'],
['和她之间最搞笑的一次经历？','太多了。比如：“他喜欢blonde not blonde smurf”、“诶那个sephora的袋子嘞”、“3个人加起来有300cm吗”、“我们有拍到毕业照吗”、“你要报警的话我家后面有警察局”……诸如此类，人怎么可以和另一个人有这么多不堪回首的回忆呢。'],
['我希望她永远不要失去什么？','爱自己的能力。爱自己是一件很简单的事情，但并非每个人都有这个意识。希望她可以一直记着这件看似平凡实则无比重要的事情，永远不要忘记如何爱自己。'],
['如果别人看我们的聊天记录，会认为我们是什么关系？','曾经赤裸相对的关系吧。能聊的、不能聊的，都聊了，当然，希望我们的聊天记录永远不会被流出去。'],
['如果中学时期的我们看到现在的我们，会有什么反应？','应该会是很凌乱的反应，大概有崇拜、感动、心疼、庆幸，诸如此类。现在的我们活得或许并没有太好，但至少不算糟糕，还是有很多值得骄傲和嘉许的地方。至少有一点我可以确认——那时候的我们一定一定希望现在的我们可以一直保持联系，幸好我们做到了，而且做得很好！'],
['有什么事情是以前的我们绝对想不到现在会做到的？','要认真的答案还是搞笑的？认真的话，大概想不到自己在19岁的年纪就可以靠自己的双手和努力买上大牌吧，很开心我们都有这样的能力和勇气。搞笑的话，大概是没想过我们有朝一日会带着点不好意思又豁出去的心态聊成人话题，毕竟，这实在是一个有点难以启齿的话题，我们不止聊了，还聊了不止一次。'],
['如果我们的聊天记录有 annual report，我们最离谱的一项数据是什么？','粗口含量过高。'],
['有没有一个画面，我到现在还能很清楚地描述出来？','冒着雨，在不知道什么时候会有车经过的公寓后面努力排出生日大片。或者，穿着校服去SS15的MR. DIY临时买牙刷和毛巾。'],
['一个没有和她说过的想法：','如果她结婚，我一定要是伴娘，可以有别人一起，但绝对不能有别人没有我。'],
['有没有什么东西证明，即使生活不同了，我们还是我们？','总是会不经意地提起以前中学的事情呀。'],
['有什么很感谢她的事情？','我会有一些和她不同的观点或价值观（比如对父母和家庭的），她都可以接受，并且不会提出任何在我听来会不舒服或自卑的 judgement。'],
['觉得她这几年很大的变化？','变得更独立了呀。更爱自己、能自己做决策、能把自己放在首位、更有规划，还有最重要的，更爱我了！'],
['除了变漂亮，我们一起变好的有什么？','我们从来都不吝啬于谈论和面对许多人生的价值观和未来的规划，在一起相伴的时间里，我们谈论了很多，也交换了很多想法，每一次的谈论都是心态上和思想上的一次成长，也是我们的关系更进一步的契机。'],
['如果成长意味着我们越来越忙，那么我希望我们的友情会怎么继续？','永远不会对彼此失去分享欲，也永远不会厌恶彼此的分享欲。'],
['很想和她一起做的一件事？','短期来说是拍很多漂亮的照片，中期来说是一起去旅游，长期来说是一起陪彼此很久很久。'],
['如果有一天她忘了自己有多好，我会提醒她什么？','她无与伦比，这一点毋庸置疑。'],
['如果能重新选择初识的时间点，我希望是什么时候？','中学就很好。我们会有对彼此过去的好奇，也会有对未来的我们的好奇。维持现况就很好，对我而言，命运的安排就是最好的安排。'],
['有没有一件当时没觉得怎样，现在想起觉得很珍贵的事情？','某一次去她家，我生着病，伤风。在她家吃了药，很早就睡了，中间迷迷糊糊起来的时候，我记得暗暗的房间，门缝处露进来的一点光，和站在床边跟我说话的她。说什么我已经忘记了，但我记得那个画面，仅有那一个。我以后大概不会在生着病的时候去别人家里睡觉了，感谢当时的她包容我。'],
['如果我们的友情是一种 bug，是什么 bug？','会有延迟。我发的信息，她总是几个小时后才看到呢 ^_^'],
['我们像哪一种情侣模式？','多年好友变情侣的那种。知道对方的糗事、见证过彼此的感情经历、偶尔口出狂言损对方、偶尔聊很多人生的意义和价值观、经常意识到自己的生命里很需要对方。'],
['有什么是我们都很需要的？','钱，or 帅气多金器大活好的男朋友。'],
['一个只有她知道的秘密？','要认真还是搞笑？认真的话，大概是只有她知道我对家庭的观念以及对父母的心态。搞笑的话，是只有她知道我的 X 是用来看少儿不宜视频的，以及我写过黄文。'],
['如果她整容了，我会靠什么认出她？','1. 身高  2. 字体  3. 说话方式  4. 择偶标准  5. 恋爱脑程度'],
['如果不允许用很大众的词语，我会怎样形容她？','绝无仅有。'],
['有哪一件事情是我们做过，但我很想再做一次的？','一起淋雨。'],
['给她颁发一个奖项？','回复信息最慢奖。'],
['对十年后的她说一句话？','如果你开始质疑自己，不妨想想十年前的你，她绝对不会嫌弃现在的你，所以你也不行。'],
['意识到自己很爱她的一个瞬间？','她坐在我对面，我静静地望着她的时候。']
];

const gate = document.querySelector('#gate');
const archive = document.querySelector('#archive');
const form = document.querySelector('#password-form');
const password = document.querySelector('#password');
const error = document.querySelector('#password-error');
form.addEventListener('submit', event => { event.preventDefault(); if(password.value === PASSWORD){gate.classList.add('hidden');archive.classList.remove('hidden');document.querySelector('#track').focus?.();}else{error.textContent='密码不对，再想一下。';password.select();} });

const track = document.querySelector('#track');
const panels = [...document.querySelectorAll('.panel')];
const chapter = document.querySelector('#chapter-label');
const move = direction => track.scrollBy({left:window.innerWidth * direction,behavior:'smooth'});
document.querySelector('#previous').addEventListener('click',()=>move(-1));document.querySelector('#next').addEventListener('click',()=>move(1));
track.addEventListener('wheel',event=>{if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){event.preventDefault();track.scrollLeft+=event.deltaY;}},{passive:false});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)chapter.textContent=entry.target.dataset.chapter;}),{root:track,threshold:.58});panels.forEach(panel=>observer.observe(panel));

const grid=document.querySelector('#question-grid'); const dialog=document.querySelector('#answer-dialog');
questions.forEach(([q],index)=>{const card=document.createElement('button');card.type='button';card.innerHTML=`<b>INVITATION ${String(index+1).padStart(2,'0')}</b><span>${q}</span>`;card.addEventListener('click',()=>{document.querySelector('#dialog-index').textContent=`PRIVATE INVITATION ${String(index+1).padStart(2,'0')} / 30`;document.querySelector('#dialog-question').textContent=q;document.querySelector('#dialog-answer').textContent=questions[index][1];dialog.showModal();});grid.append(card);});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
