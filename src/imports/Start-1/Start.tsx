import imgTescoLogoSvg1 from "./383565c08dd9637f7fd57bc69359abb6224288e8.png";

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28px] place-items-start relative row-1">
      <p className="col-1 font-['Poppins:SemiBold',sans-serif] h-[22px] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#32363a] text-[16px] w-[296px]">Meal Deal Matchmaker</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[22px] ml-0 mt-0 relative row-1 w-[78px]" data-name="Tesco_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTescoLogoSvg1} />
      </div>
      <Group2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[#e0e3e5] col-1 h-[33px] ml-0 mt-0 rounded-[2px] row-1 w-[129px]" />
      <p className="col-1 font-['Poppins:Regular',sans-serif] h-[15.968px] leading-[normal] ml-[5.07px] mt-[8.95px] not-italic relative row-1 text-[#8c8c8c] text-[10px] w-[97.057px]">Main</p>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[142px] mt-0 place-items-start relative row-1">
      <div className="bg-[#e0e3e5] col-1 h-[33px] ml-0 mt-0 rounded-[2px] row-1 w-[129px]" />
      <p className="col-1 font-['Poppins:Regular',sans-serif] h-[15.968px] leading-[normal] ml-[5.07px] mt-[8.95px] not-italic relative row-1 text-[#8c8c8c] text-[10px] w-[97.057px]">Side</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group4 />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[288px] mt-0 place-items-start relative row-1">
      <div className="bg-[#e0e3e5] col-1 h-[33px] ml-0 mt-0 rounded-[2px] row-1 w-[129px]" />
      <p className="col-1 font-['Poppins:Regular',sans-serif] h-[15.968px] leading-[normal] ml-[5.07px] mt-[8.95px] not-italic relative row-1 text-[#8c8c8c] text-[10px] w-[97.057px]">Drink</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group5 />
      <Group1 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col gap-[19px] items-start leading-[0] pb-[19px] pt-[39px] px-[34px] relative rounded-[14px] size-full" data-name="Start">
      <Group7 />
      <Group6 />
    </div>
  );
}