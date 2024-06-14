import axios from "axios";

const Payments = () => {

    const handlePayments = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/payments', {
            amount: 2500
        })
            .then((response) => {
                console.log(response)
                const redirectURL = response.data.paymentURL

                if (redirectURL) {
                    window.location.replace(redirectURL)
                }
            })
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Payments Now</h1>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlePayments} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="amount" type="text" placeholder="amount" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Payments</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;