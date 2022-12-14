import "./front-page.css";

function FrontPage(props) {
  return (
    <div className="outer-main">
      <div>
        <div className="__header">
          <h1 className="header-topic">
            SORTING <div>VISUALIZER</div>
          </h1>
          <div className="line"></div>
        </div>
        <div className="front-main">
          <h1 className="topic">Sorting Algorithms</h1>
          <div className="description">
            <p className="para">
              Sorting algorithms are used to sort a data structure according to
              a specific order relationship, such as numerical order or
              lexicographical order.
            </p>
            <p className="para">
              This operation is one of the most important and widespread in
              computer science. For a long time, new methods have been developed
              to make this procedure faster and faster.
            </p>
            <p className="para">
              There are currently hundreds of different sorting algorithms, each
              with its own specific characteristics. They are classified
              according to two metrics: space complexity and time complexity.
            </p>
            <p className="para">
              Those two kinds of complexity are represented with asymptotic
              notations, mainly with the symbols O, Θ, Ω, representing
              respectively the upper bound, the tight bound, and the lower bound
              of the algorithm's complexity, specifying in brackets an
              expression in terms of n, the number of the elements of the data
              structure.
            </p>
            <p className="para">Most of them fall into two categories:</p>
            <ul>
              <li>Logarithmic</li>
              <p>
                The complexity is proportional to the binary logarithm (i.e to
                the base 2) of n.{" "}
                <p>
                  An example of a logarithmic sorting algorithm is Quick sort,
                  with space and time complexity O(n × log n).
                </p>
              </p>
              <li>Quadratic </li>
              <p>
                The complexity is proportional to the square of n.{" "}
                <p>
                  An example of a quadratic sorting algorithm is Bubble sort,
                  with a time complexity of O(n2).
                </p>
              </p>
            </ul>

            <p className="para">
              Space and time complexity can also be further subdivided into 3
              different cases: best case, average case and worst case.
            </p>
            <p className="para">
              Sorting algorithms can be difficult to understand and it's easy to
              get confused. We believe visualizing sorting algorithms can be a
              great way to better understand their functioning while having fun!
            </p>
          </div>
          <button className="front-button">DEFAULT SORT</button>

          <button className="front-button">USER SORT</button>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
