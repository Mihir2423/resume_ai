"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { openai } from "@/utils/openai";
import React from "react";
import { useForm } from "react-hook-form";
import copy from "copy-to-clipboard";
import { Separator } from "@/components/ui/separator";

const GenerateAI = () => {
  const [buzzwords, setBuzzwords] = React.useState([]);
  const form = useForm({
    defaultValues: {
      description: "",
      jobtitle: "",
    },
  });

  const handleCopy = () => {
    copy(buzzwords.join(", "));
  };

  const onSubmit = async (values) => {
    try {
      const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate a list of relevant buzzwords for a ${values.jobtitle} position based on the following job description:\n${values.description}\nPlease provide a diverse range of buzzwords commonly used in the industry, separating each buzzword with a hyphen (-).`,
          },
        ],
      });
      setBuzzwords(chatCompletion.data.choices[0].message.content.split("-"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen text-zinc-900 flex flex-col justify-center items-center gap-5 p-24">
      <h1 className="text-3xl font-semibold capitalize">
        Generate Buzz Words to use in your Resume
      </h1>
      <Card className="w-[400px] shadow-lg shadow-black">
        <CardHeader>
          <h1 className="font-bold">Get Ahead of the Competition</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="jobtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Job Title"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste your job description here"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" variant="default" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <Separator className="bg-black mt-4" />
          <div>
            {buzzwords.length > 0 && (
              <div className="space-y-2 mt-2 w-full">
                <div className="flex items-center justify-between mt-6 w-full">
                  <h1 className="font-semibold font-lg uppercase">Buzzwords</h1>
                  <Button type="button" onClick={handleCopy}>
                    COPY
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {buzzwords.map((buzzword, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-100 rounded-md">
                      {buzzword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateAI;
