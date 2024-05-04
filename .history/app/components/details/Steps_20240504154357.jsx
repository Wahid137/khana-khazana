const Steps = ({ recipeInfo }) => {
  return (
    <section>
      <div className="container py-12">
        <h3 className="font-semibold text-xl py-6">How to Make it</h3>
        <div>
          {recipeInfo?.steps?.map((step, i) => (
            <div key={i} className="step">
              <h3>Step {i + 1}</h3>
              <p>
                Labour, of evaluated would he the a the our what is in the
                arduous sides behavioural is which the have didn't kicked
                records the it framework by the for traveler sure the can most
                well her. Entered have break himself cheek, and activity, for
                bit of text.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
