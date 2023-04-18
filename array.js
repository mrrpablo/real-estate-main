const offer = [
    {img:'./img/insurance.png', title: 'Insurance', text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresThis is where you'},
    {img:'./img/eng.png', title: 'Service Engineer'},
    {img:'./img/customer.png', title: '24/7 Customer Service'},
    {img:'./img/customer.png', title: '24/7 Customer Service'},
    {img:'./img/payment.png', title: 'Installmental Payment'}
];

let offering = document.getElementById("offering");
offering.innerHTML = offer.map((offers) =>{
    const {img, title} = offers
    return(
        `
        <div class="bg-white px-[30px] py-[45px] md:w-[31%] mt-[25px] md:mt-0 md:mb-[30px]">
                    <div class="flex items-center gap-[15px]">
                        <img src=${img} alt="">
                        <h2 class="font-[700] text-[20px] leading-[24px] text-[#000]">${title}</h2>
                    </div>
                    <p
                        class="para text-justify py-[15px] px-[10px] font-[500] text-[18px] leading-[22px] text-[#636363] mt-[20px]">${text}
                         </p>
                </div>
        `
    )
})