package com.mycompany.TwitterClone.Message;

public class MessageVM  extends Message{

	private String time;

    public MessageVM(final String senderName, final String text, final String time) {
        setSenderName(senderName);
        setText(text);
        this.time = time;
    }

    public String getTime() {
        return time;
    }
    public void setTime(String time) { this.time = time; }
}

