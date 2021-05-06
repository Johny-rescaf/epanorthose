import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { Button, ButtonToolbar, Icon, Drawer, Form, FormGroup, FormControl, ControlLabel, Input, TagPicker, SelectPicker } from "rsuite";

import Layout from "../components/layout";


let copyRightsData = [
  {
    "label": "License1",
    "value": "1",
    "role": "Master"
  },
  {
    "label": "License2 ",
    "value": "2",
    "role": "Master"
  },
  {
    "label": "License3",
    "value": "3",
    "role": "Master"
  },
  {
    "label": "License4",
    "value": "4",
    "role": "Master"
  },
  {
    "label": "License5",
    "value": "5",
    "role": "Master"
  },
];

export default function EditPost() {
  const [title, setTitle] = useState("Your article title here...");
  const [content, setContent] = useState("Write your article here...");
  const [tags, setTags] = useState("");
  const [summary, setSummary] = useState("Your article summery here...");
  const [sources, setSources] = useState("Your article sources here...");
  const [copyWrite, setCopyWrite] = useState(null);

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const text = quill.root.innerHTML;
        // console.log(text);
        setContent(text)
      });
    }
  }, [quill]);

  const saveData = async () => {
    console.log(title);
    console.log(content);
    console.log(summary);
    console.log(sources);
    console.log(copyWrite);
  }

  return (
    <Layout className="container">
      <Head>
        <title>Edit / add post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-md-1">
                <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Add article</h2>
                  
                  <ButtonToolbar>
                    <Button 
                      appearance="primary"
                      onClick={() => saveData() } >
                        <Icon icon="save" /> Save changes
                    </Button>
                  </ButtonToolbar>
                </div>

                <Form className="my-3" fluid>
                  <FormGroup>
                    <ControlLabel className="mb-3">Article title</ControlLabel>
                    <FormControl 
                    name="text" 
                    type="text" 
                    placeHolder="Article title..." 
                    style={{ height: '45px' }} 
                    value={title}
                    onChange={(value) => setTitle(value)} />
                  </FormGroup>
{/*                   
                  <div className="mb-3"> 
                    <ControlLabel className="mb-3">Article tags</ControlLabel>
                    <TagPicker creatable  style={{ width: '100%' }} menuStyle={{width: 300}} />
                  </div> */}

                  <FormGroup>
                    <ControlLabel className="mb-3">Article summary</ControlLabel>
                    <Input 
                    componentClass="textarea" 
                    rows={3} 
                    placeholder="Textarea"
                    value={summary}
                    onChange={(value) => setSummary(value)}
                     />
                  </FormGroup>
                </Form>

                <ControlLabel className="mb-3">Article Content</ControlLabel>
                <div style={{ width: '100%', height: 400 }} className="mb-3">
                  <div ref={quillRef} />
                </div>

                <ControlLabel className="mt-5">Sources &amp; bibliographie</ControlLabel>
                <Input 
                componentClass="textarea" 
                rows={3} 
                placeholder="Textarea"
                value={sources}
                onChange={(value) => setSources(value)}
                />

                <ControlLabel className="my-3">Article Copywrite</ControlLabel>
                <div>
                  <SelectPicker 
                  data={copyRightsData}
                  onChange={(value) => setCopyWrite(value)}
                  block />
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
