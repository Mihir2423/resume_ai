import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AboutDetail = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="about_me"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-blue-50">About Yourself</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Write about yourself"
                type="text"
                className="md:w-[600px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-blue-50">Email</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter your email"
                type="email"
                className="md:w-[600px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-blue-50">Phone No.</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter your phone no."
                type="text"
                className="md:w-[600px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-blue-50">Address</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter your address"
                type="text"
                className="md:w-[600px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-2 justify-between">
        <FormField
          control={form.control}
          name="skype"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-50">Skype</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your skype id"
                  type="text"
                  className="md:w-[290px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-50">Github</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your github id"
                  type="text"
                  className="md:w-[290px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-blue-50">Linkedin</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter your linkedin id"
                type="text"
                className="md:w-[600px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AboutDetail;
