import * as React from 'react';
import FileUploadProgress from 'react-fileupload-progress';
import * as Dropzone2 from "react-dropzone";
const Dropzone: any = Dropzone2;

export namespace File {
  export interface State {
    files: Array<File>;
  }

  export interface Props {
  }
}

export class Filedrop extends React.Component<File.Props, File.State> {
  public state: File.State = {
    files: [],
  };

  constructor(props?: File.Props, context?: File.State) {
    super(props, context);
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    const { files } = this.state;
    return (
      <section>
        <div>
          <Dropzone onDrop={this.onDrop.bind(this)} >
            <p>Drop yo files here!</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}
          </ul>
        </aside>
      </section>
    );
  }
}
