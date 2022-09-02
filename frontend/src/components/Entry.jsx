import { Link } from "react-router-dom";

export default function Entry(props) {
  const {
    id,
    debit_ledger: debit,
    credit_ledger: credit,
    amount,
    narration,
    created_at,
  } = props;
  const time = new Date(created_at).toLocaleDateString("en-GB");

  return (
    <div className="card w-full max-w-sm bg-base-100 mb-4">
      <div className="card-body sm:w-96 w-full text-left py-4 px-6">
        <h1 className="text-2xs font-thin break-all uppercase">
          <Link to={`/entry/${id}`} className="link text-blue-500">
            #{id}
          </Link>
          <span className="ml-2">{time}</span>
        </h1>

        <div className="grid grid-rows-2 grid-flow-col">
          <div className="col-span-1 row-span-1">
            <Link to={`/ledger/${debit._id}`} title={debit.description}>
              <h1 className="text-xl font-bold break-all capitalize">
                {debit.name} A/c
              </h1>
            </Link>
          </div>
          <div className="col-span-1 mt-1">
            <Link to={`/ledger/${credit._id}`} title={credit.description}>
              <h1 className="text-2lg font-thin break-all capitalize">
                {credit.name} A/c
              </h1>
            </Link>
          </div>
          <div className="col-span-2 row-span-2">
            <h1 className="text-3xl font-thin break-all text-right mt-2">
              ₹ {amount}
            </h1>
          </div>
        </div>

        <p className="text-sm break-all text-justify">({narration})</p>
      </div>
    </div>
  );
}
