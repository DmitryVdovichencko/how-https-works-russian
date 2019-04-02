## Picture-01

The Handshake

## Picture-02

https://howhttps.works


When you started reading this comic, your browser displayed a green lock on the address bar.

## Picture-03

How did that happen?

## Picture-04

Your browser communicated with our server, where this comic is hosted, and they both established a secure connection to transmit messages.

## Picture-05

But first, they needed to agree on how to communicate securely.

## Picture-06

https://howhttps.works


If the negotiation is not successful, your browser lets you know by showing an error or warning.

## Picture-07

https://howhttps.works


If an agreement is reached, your browser is happy to display a green padlock on the address bar.

## Picture-08

THE HANDSHAKE


This process, the negotiation between a browser and a server, is called "the handshake".

## Picture-09

It happens very fast. We are going to show you how it works.

## Picture-10

Browserbird will be your browser.

## Picture-11

Compugter will be our server.

## Picture-12

Take it away guys!

## Picture-13

Ready? Here is what the "handshake" in slow-motion looks like.

## Picture-14

Left clap

## Picture-15

Right clap

## Picture-16

Vertical shaka

## Picture-17

Shaka horizontal rotation

## Picture-18

Tickles

## Picture-19

Done!

## Picture-20

Let's do it again, but faster.

## Picture-21

Left clap - Right clap - Shaka - Shaka rotation - Tickles.

## Picture-22

A-G-A-I-N !

## Picture-23

Stop!

## Picture-24

Let's break it down. Step by step.

## Picture-25

Step One: Left clap. AKA Client Hello.

## Picture-26

I send a list of SSL/TLS versions and encryption algorithms that I can work with to Compugter.

## Picture-27

A fancy word for the encryption algorithm list is "cypher suite".

## Picture-28

So you can sound like a pro at the dinner table.

## Picture-29

The SSL and TLS protocols have evolved over time, we'll talk more about that soonish.

## Picture-30

And then I wait for an answer from Compugter.

## Picture-31

Step two: Right clap. AKA Server Hello.

## Picture-32

I choose the best SSL/TLS version and encryption algorithm among the ones browserbird sent me, and based on my preferences.

## Picture-33

I reply with my certificate, which includes my public key, so they can verify who I am.

## Picture-34

Step three: Vertical shaka. AKA Client Key Exchange.

## Picture-35

I check Compugter's certificate to make sure they are legit.

## Picture-36

I generate a "pre-master key" so we can both use it later when we generate a unique key.

## Picture-37

I encrypt that pre-master key with Compugter's public key and then send it to him.

## Picture-38

Step four: Shaka horizontal rotation. AKA Change Cypher spec.

## Picture-39

I use my private key to decrypt the pre-master key.

## Picture-40

So far all the communication between them has been in the open. They haven't secured any messages.

## Picture-41

They used asymmetric keys (public and private keys) to encrypt the pre-master key so nobody could spy on it.

## Picture-42

Now they both generate the same "shared secret" that they are going use as a symmetric key.

## Picture-43

From


To

Hey! Here is a test message encrypted with the shared secret. Can you read this? From now on, I'll encrypt everything with this key.

And browserbird sends a test.

## Picture-44

From


To

Yep! Looks great. Make sureyou can also read this. From now on, I'll encrypt everythingwith this key.

Compugter responds.

## Picture-45

Step five: Tickles. AKA Everything is now secured.


Now all data going back and forth between Browserbird and Computer is now secured for the rest of the session.

## Picture-46

Passwords, credit card details, everything.

## Picture-47

Simple, right?

## Picture-48

Next time you connect to a website securely via HTTPS, give your browser the shaka because you know their secret handshake.

# Next on HowHTTPS.works...

HTTPS, SSL, TLS, oh my! I just had an acronym soup for lunch. What do they mean? Are they the same thing?
