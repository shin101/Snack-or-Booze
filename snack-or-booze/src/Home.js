import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import './App.js'

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <p>Food : {snacks.length} </p>
      <p>Drinks : {drinks.length} </p>
    </section>
  );
}

export default Home;
