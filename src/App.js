import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './pure-css3-piano.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkMidiAvailable()
    this.state = {
      midi: null
    };
  }

  noteDown(element) {
    element.classList.add('active')
  }

  noteUp(element) {
    element.classList.remove('active')
  }

  getMIDIEvent(midiEvent) {
    const data = midiEvent.data;
    switch(data[0]) {
      case 144:
        this.noteDown(document.getElementById('note_' + data[1]));
        break;
      case 128:
        this.noteUp(document.getElementById('note_' + data[1]));
        break;
      case 176:
        // console.log('HiRes Velocity Prefix for next note');
        break;
      case 177:
        switch(data[1]) {
          case 64:
            if (data[2] > 64) {
              console.log('Sustain down');
            } else {
              console.log('Sustain up');
            }
            break;
        }
        // console.log('HiRes Velocity Prefix for next note');
        break;
      default:
        console.log('Unimplemented MIDI command: ' + data);
    }
  }

  onMIDISuccess(midiAccess) {
    this.setState({
      midi: {
        access: midiAccess,
        inputs: midiAccess.inputs.values()
      }
    });
    for (var input of midiAccess.inputs.values())
      input.onmidimessage = this.getMIDIEvent.bind(this);
  }

  onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
  }

  checkMidiAvailable() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess()
        .then(this.onMIDISuccess.bind(this), this.onMIDIFailure);
    } else {
      console.log('WebMIDI is not supported in this browser.');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div id="p-wrapper" className="piano">
          <ul id="piano">
            <li><div id='note_21' className="anchor"></div></li>
            <li><div id='note_23' className="anchor"></div><span id="note_22"></span></li>
            <li><div id='note_24' className="anchor"></div></li>
            <li><div id='note_26' className="anchor"></div><span id="note_25"></span></li>
            <li><div id='note_28' className="anchor"></div><span id="note_27"></span></li>
            <li><div id='note_29' className="anchor"></div></li>
            <li><div id='note_31' className="anchor"></div><span id="note_30"></span></li>
            <li><div id='note_33' className="anchor"></div><span id="note_32"></span></li>
            <li><div id='note_35' className="anchor"></div><span id="note_34"></span></li>
            <li><div id='note_36' className="anchor"></div></li>
            <li><div id='note_38' className="anchor"></div><span id="note_37"></span></li>
            <li><div id='note_40' className="anchor"></div><span id="note_39"></span></li>
            <li><div id='note_41' className="anchor"></div></li>
            <li><div id='note_43' className="anchor"></div><span id="note_42"></span></li>
            <li><div id='note_45' className="anchor"></div><span id="note_44"></span></li>
            <li><div id='note_47' className="anchor"></div><span id="note_46"></span></li>
            <li><div id='note_48' className="anchor"></div></li>
            <li><div id='note_50' className="anchor"></div><span id="note_49"></span></li>
            <li><div id='note_52' className="anchor"></div><span id="note_51"></span></li>
            <li><div id='note_53' className="anchor"></div></li>
            <li><div id='note_55' className="anchor"></div><span id="note_54"></span></li>
            <li><div id='note_57' className="anchor"></div><span id="note_56"></span></li>
            <li><div id='note_59' className="anchor"></div><span id="note_58"></span></li>
            <li><div id='note_60' className="anchor"></div></li>
            <li><div id='note_62' className="anchor"></div><span id="note_61"></span></li>
            <li><div id='note_64' className="anchor"></div><span id="note_63"></span></li>
            <li><div id='note_65' className="anchor"></div></li>
            <li><div id='note_67' className="anchor"></div><span id="note_66"></span></li>
            <li><div id='note_69' className="anchor"></div><span id="note_68"></span></li>
            <li><div id='note_71' className="anchor"></div><span id="note_70"></span></li>
            <li><div id='note_72' className="anchor"></div></li>
            <li><div id='note_74' className="anchor"></div><span id="note_73"></span></li>
            <li><div id='note_76' className="anchor"></div><span id="note_75"></span></li>
            <li><div id='note_77' className="anchor"></div></li>
            <li><div id='note_79' className="anchor"></div><span id="note_78"></span></li>
            <li><div id='note_81' className="anchor"></div><span id="note_80"></span></li>
            <li><div id='note_83' className="anchor"></div><span id="note_82"></span></li>
            <li><div id='note_84' className="anchor"></div></li>
            <li><div id='note_86' className="anchor"></div><span id="note_85"></span></li>
            <li><div id='note_88' className="anchor"></div><span id="note_87"></span></li>
            <li><div id='note_89' className="anchor"></div></li>
            <li><div id='note_91' className="anchor"></div><span id="note_90"></span></li>
            <li><div id='note_93' className="anchor"></div><span id="note_92"></span></li>
            <li><div id='note_95' className="anchor"></div><span id="note_94"></span></li>
            <li><div id='note_96' className="anchor"></div></li>
            <li><div id='note_98' className="anchor"></div><span id="note_97"></span></li>
            <li><div id='note_100' className="anchor"></div><span id="note_99"></span></li>
            <li><div id='note_101' className="anchor"></div></li>
            <li><div id='note_103' className="anchor"></div><span id="note_102"></span></li>
            <li><div id='note_105' className="anchor"></div><span id="note_104"></span></li>
            <li><div id='note_107' className="anchor"></div><span id='note_106'></span></li>
            <li><div id='note_108' className="anchor"></div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
