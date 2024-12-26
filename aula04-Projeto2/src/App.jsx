import "./App.css";
import TextExpender from "./components/TextExpender.jsx";

function App() {
  return (
    <>
      <TextExpender>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel metus
        justo. Quisque tempor dolor vel lectus laoreet, eu egestas tellus
        malesuada. Vestibulum varius dolor quis ex posuere, vitae efficitur nisi
        commodo. Ut iaculis auctor luctus. Nullam vestibulum id felis a
        pharetra. Suspendisse sodales justo urna, auctor pretium risus tristique
        vitae. Maecenas tempor blandit aliquam. Curabitur nec velit risus.
      </TextExpender>
      <TextExpender
        collapseNumWords={20}
        expandButtonText='Show Text'
        collapseButtonText='Collapse text'
        buttonColor='#ff6622'
      >
        Aliquam congue, sem eu varius porta, est orci suscipit mauris, nec
        bibendum turpis nisi ac orci. Pellentesque non vulputate dui, in
        ultrices nulla. Cras vitae metus semper, accumsan nulla sit amet, tempus
        arcu. Nulla maximus sapien neque, sed semper risus condimentum ut. Ut
        sed elit ipsum. Proin egestas mauris tempus lacus rhoncus, vel dignissim
        ante lacinia. Curabitur eu euismod nibh. Maecenas molestie venenatis
        mollis. Vivamus semper, ex quis convallis tempus, velit nisi lobortis
        ipsum, eget ultricies sem ex vel ligula. Nullam sollicitudin turpis
        massa, vel euismod purus accumsan quis.
      </TextExpender>
      <TextExpender
        buttonInline={false}
        className='box'
      >
        Donec at tempus arcu. Donec felis tortor, viverra nec dui ut, hendrerit
        sagittis mi. Proin luctus, mi et porta dignissim, erat libero tincidunt
        quam, tempus venenatis leo ante sed nisi. Cras viverra dignissim tellus
        at posuere. Quisque consequat ante dui, eget egestas arcu hendrerit a.
        Fusce sodales turpis ut elit venenatis, malesuada mattis turpis congue.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        sollicitudin neque vel purus sodales, sed luctus nisl consequat.
      </TextExpender>
    </>
  );
}

export default App;
