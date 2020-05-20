import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Seo from '../components/Seo';
import DataTable from '../components/DataTable';
import InfoModal from '../components/InfoModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const IndexPage = () => (
  <>
    <Seo />
    <div className="m-4">
      <div className="introduction">
        <h1>Unofficial Planet Zoo Animals List</h1>
        <p>
          Welcome to the unofficial Planet Zoo animal list. Planet Zoo is simulation game where you
          create your own zoo. I&apos;ve created this tool to allow players to sort and filter the
          animals in the game to find the perfect animals to add to their zoo.
        </p>
        <div className="button-list">
          <Button href="https://www.planetzoogame.com/">Check out the official website and buy the game</Button>
          <InfoModal />
        </div>
        <h2 className="mt-3">How to use</h2>
        <ul>
          <li>
            First use the menu below to select attributes that you want to compare and these will be
            displayed in the table.
          </li>
          <li>
            Clicking on the name of an animal will open the Planet Zoo Wiki entry for that animal.
          </li>
          <li>
            You can sort a column by clicking on its title. Clicking once will sort a column in
            ascending order. Clicking again will sort it in descending order. Clicking a third time
            will stop the column being sorted.
          </li>
          <li>
            You can filter a column by clicking on the filter button for that column which will open
            a filter menu unique to the column you are filtering. Filters are applied immediately and
            you can close the menu by clicking the filter button again.
          </li>
        </ul>
        <Jumbotron>
          <h2>Not all animals listed!</h2>
          <p>
            I haven&apos;t had time to add all the data yet! If you&apos;d like to help submit a pull
            request over on GitHub.
          </p>
          <p>
            <Button href="https://github.com/CodingGreen/pz-animal-list">Submit a Pull Request</Button>
          </p>
        </Jumbotron>
      </div>
      <DataTable />
    </div>
  </>
);

export default IndexPage;
