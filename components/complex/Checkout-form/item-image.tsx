import { config } from "@/config";
import { newDataItems } from "@/interface/checkout";


export default (dataItems: newDataItems) => {
  // const {} = props

  return (
    <>
      <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
          <div className="cropped">
            <img
              src={`${config.URL}/${dataItems?.voucher?.thumbnail}`}
              className="img-fluid ratio ratio-1x1"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">
            {dataItems?.voucher?.name}
          </p>
          <p className="color-palette-2 m-0">
            {dataItems?.voucher?.category?.name}
          </p>
        </div>
      </div>
    </>
  );
};
