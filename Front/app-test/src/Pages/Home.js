import NavBar from "../components/NavBar"

import Pai from '../components/Pai'
//import Table from '../components/Table'

export default function Home() {
    return (
        <div>
            <NavBar />

            <div className="row">
                <div className="col-sm-12 col-lg-6" style={{
                    display: 'flex',
                    justifyContent: 'center', marginTop: '10%', border: '1px solid blue'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                        <h5><span style={{color:'#8A0886'}}>INCOME</span>/<span style={{color:'#DF01D7'}}>EXPENSES</span></h5>
                        <div className="card">
                            <div className="card-body">
                                <Pai />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-6" style={{
                    display: 'flex',
                    justifyContent: 'center', marginTop: '10%', border: '1px solid blue'
                }}>
                    <div className="card">
                        <div className="card-body">
                            <h1 style={{ fontSize: '50px', color: '#8A0886'}}>$ 4500</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
            <div className="col-sm-12 col-lg-8" style={{
                    display: 'flex',
                    justifyContent: 'center', marginTop: '10%', border: '1px solid blue'
                }}>
                   <h5>Aqui va la tabla...</h5>
                </div>
            </div>



        </div>
    )
}

