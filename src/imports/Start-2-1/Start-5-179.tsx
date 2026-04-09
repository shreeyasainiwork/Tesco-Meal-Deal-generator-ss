import imgTescoLogoSvg1 from "./383565c08dd9637f7fd57bc69359abb6224288e8.png";

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28px] place-items-start relative row-1">
      <p className="col-1 font-['Poppins:SemiBold',sans-serif] h-[22px] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#32363a] text-[16px] w-[296px]">Your Best Combo, Made Better!</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[22px] ml-0 mt-0 relative row-1 w-[78px]" data-name="Tesco_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTescoLogoSvg1} />
      </div>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[#e0e3e5] col-1 h-[116px] ml-0 mt-0 rounded-[2px] row-1 w-[431px]" />
      <div className="col-1 font-['Poppins:Regular',sans-serif] h-[90.301px] ml-[11px] mt-[7.05px] not-italic relative row-1 text-[#8c8c8c] text-[10px] w-[334px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">(somehting related to how quick or long decision it was) + Justification line for meal combo.... (variation)</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">
          Main:
          <br aria-hidden="true" />
          Side:
          <br aria-hidden="true" />
          Drink:
        </p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col gap-[25px] items-start pb-[19px] pt-[39px] px-[34px] relative rounded-[14px] size-full" data-name="Start">
      <Group />
      <Group4 />
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c8c8c] text-[8px] text-center underline w-[431px]">{`Start again, when you fancy another one. `}</p>
    </div>
  );
}