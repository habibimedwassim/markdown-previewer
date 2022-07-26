const initialState = `
This is a Paragraph

**this is a bold text**

*this is a italic text*

> Block quote

# Heading 1
## Heading 2

- List item 1
- List item 2

[Visit my github repo](https://github.com/habibimedwassim)

This is an inline code \`<div></div>\`

This is a block code
\`\`\`
let x = 1;
let y = 2;
\`\`\`

![IMG](https://picsum.photos/200)


`;

class App extends React.Component {
    state = {
        markdown: initialState,
    };
    handleChange = (e) => {
        this.setState({
            markdown: e.target.value,
        });
    };
    render() {
        let { markdown } = this.state;
        let transformedMarkdown = marked(markdown);

        return (
            <div>
                <h2 className="text-center m-4">Convert your markdown</h2>
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-center">Enter Your Markdown:</h6>
                        <textarea
                            id="editor"
                            className="form-control p-2"
                            value={markdown}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="col-6">
                        <h6 className="text-center">Result Preview: </h6>
                        <div
                            id="preview"
                            className="previewer rounded p-2"
                            dangerouslySetInnerHTML={{
                                __html: transformedMarkdown,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
