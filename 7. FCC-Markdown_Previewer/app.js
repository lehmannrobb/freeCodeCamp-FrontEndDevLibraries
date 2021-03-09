// Credit to Florin Pop with markup conversion
class App extends React.Component {
     // Set initial state
    state = {
        text: placeholder
    }
    // Main Function
    submitMarkup = (e) => {
        this.setState({
          text: e.target.value
        })
      }

    render() {

        const { text } = this.state;
    
        const markdown = marked(text, { breaks: true });

        return (
            <div>
                {/* Heading */}
                <h1 className="text-center"><i className="fab fa-free-code-camp"></i> FCC-Markdown Previewer</h1>
                <div className="container">
                    <div className="col-6">
                        {/* input */}
                        <h3 className="text-center">Input:</h3>
                        <textarea 
                            name="text"
                            id="editor" 
                            placeholder={placeholder}
                            value={text}
                            onChange={this.submitMarkup}
                            className="form-control">
                        </textarea>
                    </div>
                    <div className="col-6">
                            {/* Output */}
                            <h3 className="text-center">Output:</h3>
                            {/* Markdown */}
                            <div className="preview rounded" dangerouslySetInnerHTML={{__html:markdown}} id="preview">
                            </div>
                    </div>
                </div>              
            </div>
        );
    }
}
// Placeholder
const placeholder = `
A single line of text.
**Then some text in bold**
~~StrikeThrough~~
> Here are some Block Quotes for you fam!
> Hit em with some more Block Quotes (O^o^O)

# Uno
## Two
### Drei

- list item 1
- then came list item 2
- last, but not least, list item 3

1. Create Markdown
1. ?
1. Profit

[Don't @ me here](https://google.com)

This is some \` <div>INLINE</div> \` code

\`\`\`
let a = This
let b = Is
let c = A
let d = Block
let e = Of
let f = Code.
\`\`\`


![Github](https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png)

`;


ReactDOM.render(<App/>, document.getElementById('root'));