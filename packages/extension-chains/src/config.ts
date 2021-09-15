import {MetadataDef} from "@cennznet/extension-inject/types";

const commomTypes = {"color": "#191a2e",
  "icon": "CENNZnet",
  "metaCalls": "bWV0YQx4GFN5c3RlbQABKChmaWxsX2Jsb2NrBBhfcmF0aW8cUGVyYmlsbAQFAUEgZGlzcGF0Y2ggdGhhdCB3aWxsIGZpbGwgdGhlIGJsb2NrIHdlaWdodCB1cCB0byB0aGUgZ2l2ZW4gcmF0aW8uGHJlbWFyawQcX3JlbWFyaxRCeXRlcwRoTWFrZSBzb21lIG9uLWNoYWluIHJlbWFyay44c2V0X2hlYXBfcGFnZXMEFHBhZ2VzDHU2NAT4U2V0IHRoZSBudW1iZXIgb2YgcGFnZXMgaW4gdGhlIFdlYkFzc2VtYmx5IGVudmlyb25tZW50J3MgaGVhcC4gc2V0X2NvZGUEEGNvZGUUQnl0ZXMEZFNldCB0aGUgbmV3IHJ1bnRpbWUgY29kZS5cc2V0X2NvZGVfd2l0aG91dF9jaGVja3MEEGNvZGUUQnl0ZXMEGQFTZXQgdGhlIG5ldyBydW50aW1lIGNvZGUgd2l0aG91dCBkb2luZyBhbnkgY2hlY2tzIG9mIHRoZSBnaXZlbiBgY29kZWAuXHNldF9jaGFuZ2VzX3RyaWVfY29uZmlnBExjaGFuZ2VzX3RyaWVfY29uZmlngE9wdGlvbjxDaGFuZ2VzVHJpZUNvbmZpZ3VyYXRpb24+BJxTZXQgdGhlIG5ldyBjaGFuZ2VzIHRyaWUgY29uZmlndXJhdGlvbi4sc2V0X3N0b3JhZ2UEFGl0ZW1zNFZlYzxLZXlWYWx1ZT4EaFNldCBzb21lIGl0ZW1zIG9mIHN0b3JhZ2UuMGtpbGxfc3RvcmFnZQQQa2V5cyBWZWM8S2V5PgR0S2lsbCBzb21lIGl0ZW1zIGZyb20gc3RvcmFnZS4sa2lsbF9wcmVmaXgIGHByZWZpeAxLZXkgX3N1YmtleXMMdTMyBBEBS2lsbCBhbGwgc3RvcmFnZSBpdGVtcyB3aXRoIGEga2V5IHRoYXQgc3RhcnRzIHdpdGggdGhlIGdpdmVuIHByZWZpeC4cc3VpY2lkZQAIYQFLaWxsIHRoZSBzZW5kaW5nIGFjY291bnQsIGFzc3VtaW5nIHRoZXJlIGFyZSBubyByZWZlcmVuY2VzIG91dHN0YW5kaW5nIGFuZCB0aGUgY29tcG9zaXRljGRhdGEgaXMgZXF1YWwgdG8gaXRzIGRlZmF1bHQgdmFsdWUuAAAAACRTY2hlZHVsZXIAARggc2NoZWR1bGUQEHdoZW4sQmxvY2tOdW1iZXI4bWF5YmVfcGVyaW9kaWM4T3B0aW9uPFBlcmlvZD4gcHJpb3JpdHkgUHJpb3JpdHkQY2FsbBBDYWxsBHBBbm9ueW1vdXNseSBzY2hlZHVsZSBhIHRhc2suGGNhbmNlbAgQd2hlbixCbG9ja051bWJlchRpbmRleAx1MzIElENhbmNlbCBhbiBhbm9ueW1vdXNseSBzY2hlZHVsZWQgdGFzay44c2NoZWR1bGVfbmFtZWQUCGlkFEJ5dGVzEHdoZW4sQmxvY2tOdW1iZXI4bWF5YmVfcGVyaW9kaWM4T3B0aW9uPFBlcmlvZD4gcHJpb3JpdHkgUHJpb3JpdHkQY2FsbBBDYWxsBFhTY2hlZHVsZSBhIG5hbWVkIHRhc2suMGNhbmNlbF9uYW1lZAQIaWQUQnl0ZXMEeENhbmNlbCBhIG5hbWVkIHNjaGVkdWxlZCB0YXNrLjhzY2hlZHVsZV9hZnRlchAUYWZ0ZXIsQmxvY2tOdW1iZXI4bWF5YmVfcGVyaW9kaWM4T3B0aW9uPFBlcmlvZD4gcHJpb3JpdHkgUHJpb3JpdHkQY2FsbBBDYWxsBKhBbm9ueW1vdXNseSBzY2hlZHVsZSBhIHRhc2sgYWZ0ZXIgYSBkZWxheS5Qc2NoZWR1bGVfbmFtZWRfYWZ0ZXIUCGlkFEJ5dGVzFGFmdGVyLEJsb2NrTnVtYmVyOG1heWJlX3BlcmlvZGljOE9wdGlvbjxQZXJpb2Q+IHByaW9yaXR5IFByaW9yaXR5EGNhbGwQQ2FsbASQU2NoZWR1bGUgYSBuYW1lZCB0YXNrIGFmdGVyIGEgZGVsYXkuAAAAARBCYWJlAAEITHJlcG9ydF9lcXVpdm9jYXRpb24ISGVxdWl2b2NhdGlvbl9wcm9vZlRCYWJlRXF1aXZvY2F0aW9uUHJvb2Y8a2V5X293bmVyX3Byb29mNEtleU93bmVyUHJvb2YQCQFSZXBvcnQgYXV0aG9yaXR5IGVxdWl2b2NhdGlvbi9taXNiZWhhdmlvci4gVGhpcyBtZXRob2Qgd2lsbCB2ZXJpZnkFAXRoZSBlcXVpdm9jYXRpb24gcHJvb2YgYW5kIHZhbGlkYXRlIHRoZSBnaXZlbiBrZXkgb3duZXJzaGlwIHByb29mDQFhZ2FpbnN0IHRoZSBleHRyYWN0ZWQgb2ZmZW5kZXIuIElmIGJvdGggYXJlIHZhbGlkLCB0aGUgb2ZmZW5jZSB3aWxsMGJlIHJlcG9ydGVkLnByZXBvcnRfZXF1aXZvY2F0aW9uX3Vuc2lnbmVkCEhlcXVpdm9jYXRpb25fcHJvb2ZUQmFiZUVxdWl2b2NhdGlvblByb29mPGtleV9vd25lcl9wcm9vZjRLZXlPd25lclByb29mIAkBUmVwb3J0IGF1dGhvcml0eSBlcXVpdm9jYXRpb24vbWlzYmVoYXZpb3IuIFRoaXMgbWV0aG9kIHdpbGwgdmVyaWZ5BQF0aGUgZXF1aXZvY2F0aW9uIHByb29mIGFuZCB2YWxpZGF0ZSB0aGUgZ2l2ZW4ga2V5IG93bmVyc2hpcCBwcm9vZg0BYWdhaW5zdCB0aGUgZXh0cmFjdGVkIG9mZmVuZGVyLiBJZiBib3RoIGFyZSB2YWxpZCwgdGhlIG9mZmVuY2Ugd2lsbDBiZSByZXBvcnRlZC4NAVRoaXMgZXh0cmluc2ljIG11c3QgYmUgY2FsbGVkIHVuc2lnbmVkIGFuZCBpdCBpcyBleHBlY3RlZCB0aGF0IG9ubHkVAWJsb2NrIGF1dGhvcnMgd2lsbCBjYWxsIGl0ICh2YWxpZGF0ZWQgaW4gYFZhbGlkYXRlVW5zaWduZWRgKSwgYXMgc3VjaBUBaWYgdGhlIGJsb2NrIGF1dGhvciBpcyBkZWZpbmVkIGl0IHdpbGwgYmUgZGVmaW5lZCBhcyB0aGUgZXF1aXZvY2F0aW9uJHJlcG9ydGVyLgAAAAIkVGltZXN0YW1wAAEEDHNldAQMbm93PENvbXBhY3Q8TW9tZW50PgRUU2V0IHRoZSBjdXJyZW50IHRpbWUuAAAAAzBHZW5lcmljQXNzZXQAARwYY3JlYXRlDBRvd25lciRBY2NvdW50SWQcb3B0aW9uczBBc3NldE9wdGlvbnMQaW5mbyRBc3NldEluZm8QBQFDcmVhdGUgYSBuZXcga2luZCBvZiBhc3NldCBhbmQgbm9taW5hdGVzIHRoZSBvd25lciBvZiB0aGlzIGFzc2V0LsRUaGUgYXNzZXRfaWQgd2lsbCBiZSB0aGUgbmV4dCB1bm9jY3VwaWVkIGFzc2V0X2lkhQFBY2NvdW50cyB3aG8gd2lsbCBoYXZlIHRoZSBwZXJtaXNzaW9ucyB0byBtaW50L2J1cm4vY2hhbmdlIHBlcm1pc3Npb24gYXJlIHBhc3NlZCBpbiB2aWEgJ29wdGlvbnMnhG9yaWdpbiBvZiB0aGlzIGNhbGwgbXVzdCBiZSByb290LiB0cmFuc2ZlcgwgYXNzZXRfaWRAQ29tcGFjdDxBc3NldElkPgh0byRBY2NvdW50SWQYYW1vdW50QENvbXBhY3Q8QmFsYW5jZT4E1FRyYW5zZmVyIHNvbWUgbGlxdWlkIGZyZWUgYmFsYW5jZSB0byBhbm90aGVyIGFjY291bnQuRHVwZGF0ZV9wZXJtaXNzaW9uCCBhc3NldF9pZEBDb21wYWN0PEFzc2V0SWQ+OG5ld19wZXJtaXNzaW9uQFBlcm1pc3Npb25MYXRlc3QEXQFVcGRhdGVzIHBlcm1pc3Npb25zKG1pbnQvYnVybi9jaGFuZ2UgcGVybWlzc2lvbikgZm9yIGEgZ2l2ZW4gYGFzc2V0X2lkYCBhbmQgYW4gYWNjb3VudC5EdXBkYXRlX2Fzc2V0X2luZm8IIGFzc2V0X2lkQENvbXBhY3Q8QXNzZXRJZD4QaW5mbyRBc3NldEluZm8EqFVwZGF0ZXMgYXNzZXQgaW5mbyBmb3IgYSBnaXZlbiBgYXNzZXRfaWRgLhBtaW50DCBhc3NldF9pZEBDb21wYWN0PEFzc2V0SWQ+CHRvJEFjY291bnRJZBhhbW91bnQcQmFsYW5jZQiRAU1pbnRzIGFuIGFzc2V0LCBpbmNyZWFzZXMgaXRzIHRvdGFsIGlzc3VhbmNlLiBEZXBvc2l0cyB0aGUgbmV3bHkgbWludGVkIGN1cnJlbmN5IGludG8gdGFyZ2V0IGFjY291bnSgVGhlIG9yaWdpbiBtdXN0IGhhdmUgYG1pbnRgIHBlcm1pc3Npb25zLhBidXJuDCBhc3NldF9pZEBDb21wYWN0PEFzc2V0SWQ+GHRhcmdldCRBY2NvdW50SWQYYW1vdW50HEJhbGFuY2UISQFCdXJucyBhbiBhc3NldCwgZGVjcmVhc2VzIGl0cyB0b3RhbCBpc3N1YW5jZS4gRGVkdWN0IHRoZSBtb25leSBmcm9tIHRhcmdldCBhY2NvdW50qFRoZSBgb3JpZ2luYCBtdXN0IGhhdmUgYGJ1cm5gIHBlcm1pc3Npb25zLjxjcmVhdGVfcmVzZXJ2ZWQMIGFzc2V0X2lkHEFzc2V0SWQcb3B0aW9uczBBc3NldE9wdGlvbnMQaW5mbyRBc3NldEluZm8MqENyZWF0ZSBhIG5ldyBhc3NldCB3aXRoIHJlc2VydmVkIGFzc2V0X2lkLrhJbnRlcm5hbGx5IGNhbGxzIGNyZWF0ZV9hc3NldCB3aXRoIGFuIGFzc2V0X2lkTFJlcXVpcmVzIFJvb3QgY2FsbC4AAAAEKEF1dGhvcnNoaXAAAQQoc2V0X3VuY2xlcwQobmV3X3VuY2xlcyxWZWM8SGVhZGVyPgRgUHJvdmlkZSBhIHNldCBvZiB1bmNsZXMuAAAABRxTdGFraW5nAAFcEGJvbmQMKGNvbnRyb2xsZXIkQWNjb3VudElkFHZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPhRwYXllZURSZXdhcmREZXN0aW5hdGlvbghhAVRha2UgdGhlIG9yaWdpbiBhY2NvdW50IGFzIGEgc3Rhc2ggYW5kIGxvY2sgdXAgYHZhbHVlYCBvZiBpdHMgYmFsYW5jZS4gYGNvbnRyb2xsZXJgIHdpbGyAYmUgdGhlIGFjY291bnQgdGhhdCBjb250cm9scyBpdC4oYm9uZF9leHRyYQQ4bWF4X2FkZGl0aW9uYWxIQ29tcGFjdDxCYWxhbmNlT2Y+CGEBQWRkIHNvbWUgZXh0cmEgYW1vdW50IHRoYXQgaGF2ZSBhcHBlYXJlZCBpbiB0aGUgc3Rhc2ggYGZyZWVfYmFsYW5jZWAgaW50byB0aGUgYmFsYW5jZSB1cDBmb3Igc3Rha2luZy4YdW5ib25kBBR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj4MUQFTY2hlZHVsZSBhIHBvcnRpb24gb2YgdGhlIHN0YXNoIHRvIGJlIHVubG9ja2VkIHJlYWR5IGZvciB0cmFuc2ZlciBvdXQgYWZ0ZXIgdGhlIGJvbmT8cGVyaW9kIGVuZHMuIElmIHRoaXMgbGVhdmVzIGFuIGFtb3VudCBhY3RpdmVseSBib25kZWQgbGVzcyB0aGFuIQFUOjpDdXJyZW5jeTo6bWluaW11bV9iYWxhbmNlKCksIHRoZW4gaXQgaXMgaW5jcmVhc2VkIHRvIHRoZSBmdWxsIGFtb3VudC5Ed2l0aGRyYXdfdW5ib25kZWQABCkBUmVtb3ZlIGFueSB1bmxvY2tlZCBjaHVua3MgZnJvbSB0aGUgYHVubG9ja2luZ2AgcXVldWUgZnJvbSBvdXIgbWFuYWdlbWVudC4gdmFsaWRhdGUEFHByZWZzOFZhbGlkYXRvclByZWZzBOREZWNsYXJlIHRoZSBkZXNpcmUgdG8gdmFsaWRhdGUgZm9yIHRoZSBvcmlnaW4gY29udHJvbGxlci4gbm9taW5hdGUEHHRhcmdldHM4VmVjPEFjY291bnRJZD4EDQFEZWNsYXJlIHRoZSBkZXNpcmUgdG8gbm9taW5hdGUgYHRhcmdldHNgIGZvciB0aGUgb3JpZ2luIGNvbnRyb2xsZXIuFGNoaWxsAATERGVjbGFyZSBubyBkZXNpcmUgdG8gZWl0aGVyIHZhbGlkYXRlIG9yIG5vbWluYXRlLiRzZXRfcGF5ZWUEFHBheWVlRFJld2FyZERlc3RpbmF0aW9uBLQoUmUtKXNldCB0aGUgcGF5bWVudCB0YXJnZXQgZm9yIGEgY29udHJvbGxlci44c2V0X2NvbnRyb2xsZXIEKGNvbnRyb2xsZXIkQWNjb3VudElkBIwoUmUtKXNldCB0aGUgY29udHJvbGxlciBvZiBhIHN0YXNoLkxzZXRfdmFsaWRhdG9yX2NvdW50BAxuZXcwQ29tcGFjdDx1MzI+BJBTZXRzIHRoZSBpZGVhbCBudW1iZXIgb2YgdmFsaWRhdG9ycy5gaW5jcmVhc2VfdmFsaWRhdG9yX2NvdW50BChhZGRpdGlvbmFsMENvbXBhY3Q8dTMyPgSoSW5jcmVtZW50cyB0aGUgaWRlYWwgbnVtYmVyIG9mIHZhbGlkYXRvcnMuNGZvcmNlX25vX2VyYXMABKxGb3JjZSB0aGVyZSB0byBiZSBubyBuZXcgZXJhcyBpbmRlZmluaXRlbHkuNGZvcmNlX25ld19lcmEACEkBRm9yY2UgdGhlcmUgdG8gYmUgYSBuZXcgZXJhIGF0IHRoZSBlbmQgb2YgdGhlIG5leHQgc2Vzc2lvbi4gQWZ0ZXIgdGhpcywgaXQgd2lsbCBiZZxyZXNldCB0byBub3JtYWwgKG5vbi1mb3JjZWQpIGJlaGF2aW91ci5Ac2V0X21pbmltdW1fYm9uZAQUdmFsdWUkQmFsYW5jZU9mBHBTZXQgdGhlIG1pbmltdW0gYm9uZCBhbW91bnQuRHNldF9pbnZ1bG5lcmFibGVzBCh2YWxpZGF0b3JzOFZlYzxBY2NvdW50SWQ+BMhTZXQgdGhlIHZhbGlkYXRvcnMgd2hvIGNhbm5vdCBiZSBzbGFzaGVkIChpZiBhbnkpLjRmb3JjZV91bnN0YWtlBBRzdGFzaCRBY2NvdW50SWQECQFGb3JjZSBhIGN1cnJlbnQgc3Rha2VyIHRvIGJlY29tZSBjb21wbGV0ZWx5IHVuc3Rha2VkLCBpbW1lZGlhdGVseS5QZm9yY2VfbmV3X2VyYV9hbHdheXMABAEBRm9yY2UgdGhlcmUgdG8gYmUgYSBuZXcgZXJhIGF0IHRoZSBlbmQgb2Ygc2Vzc2lvbnMgaW5kZWZpbml0ZWx5LlRjYW5jZWxfZGVmZXJyZWRfc2xhc2gIDGVyYSBFcmFJbmRleDRzbGFzaF9pbmRpY2VzIFZlYzx1MzI+BJRDYW5jZWwgZW5hY3RtZW50IG9mIGEgZGVmZXJyZWQgc2xhc2guGHJlYm9uZAQUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+BNxSZWJvbmQgYSBwb3J0aW9uIG9mIHRoZSBzdGFzaCBzY2hlZHVsZWQgdG8gYmUgdW5sb2NrZWQuRHNldF9oaXN0b3J5X2RlcHRoCERuZXdfaGlzdG9yeV9kZXB0aERDb21wYWN0PEVyYUluZGV4PkhfZXJhX2l0ZW1zX2RlbGV0ZWQwQ29tcGFjdDx1MzI+CC0BU2V0IGBIaXN0b3J5RGVwdGhgIHZhbHVlLiBUaGlzIGZ1bmN0aW9uIHdpbGwgZGVsZXRlIGFueSBoaXN0b3J5IGluZm9ybWF0aW9ufHdoZW4gYEhpc3RvcnlEZXB0aGAgaXMgcmVkdWNlZC4ocmVhcF9zdGFzaAQUc3Rhc2gkQWNjb3VudElkDDUBUmVtb3ZlIGFsbCBkYXRhIHN0cnVjdHVyZSBjb25jZXJuaW5nIGEgc3Rha2VyL3N0YXNoIG9uY2UgaXRzIGJhbGFuY2UgaXMgemVyby5dAVRoaXMgaXMgZXNzZW50aWFsbHkgZXF1aXZhbGVudCB0byBgd2l0aGRyYXdfdW5ib25kZWRgIGV4Y2VwdCBpdCBjYW4gYmUgY2FsbGVkIGJ5IGFueW9uZbxhbmQgdGhlIHRhcmdldCBgc3Rhc2hgIG11c3QgaGF2ZSBubyBmdW5kcyBsZWZ0LmBzdWJtaXRfZWxlY3Rpb25fc29sdXRpb24UHHdpbm5lcnNMVmVjPFZhbGlkYXRvckluZGV4Phxjb21wYWN0SENvbXBhY3RBc3NpZ25tZW50cxRzY29yZTRFbGVjdGlvblNjb3JlDGVyYSBFcmFJbmRleBBzaXplMEVsZWN0aW9uU2l6ZQTgU3VibWl0IGFuIGVsZWN0aW9uIHJlc3VsdCB0byB0aGUgY2hhaW4uIElmIHRoZSBzb2x1dGlvbjqEc3VibWl0X2VsZWN0aW9uX3NvbHV0aW9uX3Vuc2lnbmVkFBx3aW5uZXJzTFZlYzxWYWxpZGF0b3JJbmRleD4cY29tcGFjdEhDb21wYWN0QXNzaWdubWVudHMUc2NvcmU0RWxlY3Rpb25TY29yZQxlcmEgRXJhSW5kZXgQc2l6ZTBFbGVjdGlvblNpemUEvFVuc2lnbmVkIHZlcnNpb24gb2YgYHN1Ym1pdF9lbGVjdGlvbl9zb2x1dGlvbmAuAAAABiBPZmZlbmNlcwABAAAAAAccU2Vzc2lvbgABCCBzZXRfa2V5cwgQa2V5cxBLZXlzFHByb29mFEJ5dGVzDORTZXRzIHRoZSBzZXNzaW9uIGtleShzKSBvZiB0aGUgZnVuY3Rpb24gY2FsbGVyIHRvIGBrZXlzYC4dAUFsbG93cyBhbiBhY2NvdW50IHRvIHNldCBpdHMgc2Vzc2lvbiBrZXkgcHJpb3IgdG8gYmVjb21pbmcgYSB2YWxpZGF0b3IuwFRoaXMgZG9lc24ndCB0YWtlIGVmZmVjdCB1bnRpbCB0aGUgbmV4dCBzZXNzaW9uLihwdXJnZV9rZXlzAAjIUmVtb3ZlcyBhbnkgc2Vzc2lvbiBrZXkocykgb2YgdGhlIGZ1bmN0aW9uIGNhbGxlci7AVGhpcyBkb2Vzbid0IHRha2UgZWZmZWN0IHVudGlsIHRoZSBuZXh0IHNlc3Npb24uAAAACBxHcmFuZHBhAAEMTHJlcG9ydF9lcXVpdm9jYXRpb24ISGVxdWl2b2NhdGlvbl9wcm9vZmBHcmFuZHBhRXF1aXZvY2F0aW9uUHJvb2Y8a2V5X293bmVyX3Byb29mNEtleU93bmVyUHJvb2YQCQFSZXBvcnQgdm90ZXIgZXF1aXZvY2F0aW9uL21pc2JlaGF2aW9yLiBUaGlzIG1ldGhvZCB3aWxsIHZlcmlmeSB0aGX0ZXF1aXZvY2F0aW9uIHByb29mIGFuZCB2YWxpZGF0ZSB0aGUgZ2l2ZW4ga2V5IG93bmVyc2hpcCBwcm9vZvhhZ2FpbnN0IHRoZSBleHRyYWN0ZWQgb2ZmZW5kZXIuIElmIGJvdGggYXJlIHZhbGlkLCB0aGUgb2ZmZW5jZUR3aWxsIGJlIHJlcG9ydGVkLnByZXBvcnRfZXF1aXZvY2F0aW9uX3Vuc2lnbmVkCEhlcXVpdm9jYXRpb25fcHJvb2ZgR3JhbmRwYUVxdWl2b2NhdGlvblByb29mPGtleV9vd25lcl9wcm9vZjRLZXlPd25lclByb29mEAkBUmVwb3J0IHZvdGVyIGVxdWl2b2NhdGlvbi9taXNiZWhhdmlvci4gVGhpcyBtZXRob2Qgd2lsbCB2ZXJpZnkgdGhl9GVxdWl2b2NhdGlvbiBwcm9vZiBhbmQgdmFsaWRhdGUgdGhlIGdpdmVuIGtleSBvd25lcnNoaXAgcHJvb2b4YWdhaW5zdCB0aGUgZXh0cmFjdGVkIG9mZmVuZGVyLiBJZiBib3RoIGFyZSB2YWxpZCwgdGhlIG9mZmVuY2VEd2lsbCBiZSByZXBvcnRlZC4wbm90ZV9zdGFsbGVkCBRkZWxheSxCbG9ja051bWJlcmxiZXN0X2ZpbmFsaXplZF9ibG9ja19udW1iZXIsQmxvY2tOdW1iZXIcGQFOb3RlIHRoYXQgdGhlIGN1cnJlbnQgYXV0aG9yaXR5IHNldCBvZiB0aGUgR1JBTkRQQSBmaW5hbGl0eSBnYWRnZXQgaGFzJQFzdGFsbGVkLiBUaGlzIHdpbGwgdHJpZ2dlciBhIGZvcmNlZCBhdXRob3JpdHkgc2V0IGNoYW5nZSBhdCB0aGUgYmVnaW5uaW5nHQFvZiB0aGUgbmV4dCBzZXNzaW9uLCB0byBiZSBlbmFjdGVkIGBkZWxheWAgYmxvY2tzIGFmdGVyIHRoYXQuIFRoZSBkZWxheREBc2hvdWxkIGJlIGhpZ2ggZW5vdWdoIHRvIHNhZmVseSBhc3N1bWUgdGhhdCB0aGUgYmxvY2sgc2lnbmFsbGluZyB0aGUlAWZvcmNlZCBjaGFuZ2Ugd2lsbCBub3QgYmUgcmUtb3JnZWQgKGUuZy4gMTAwMCBibG9ja3MpLiBUaGUgR1JBTkRQQSB2b3RlcnMlAXdpbGwgc3RhcnQgdGhlIG5ldyBhdXRob3JpdHkgc2V0IHVzaW5nIHRoZSBnaXZlbiBmaW5hbGl6ZWQgYmxvY2sgYXMgYmFzZS5YT25seSBjYWxsYWJsZSBieSByb290LgAAAAogSW1PbmxpbmUAAQQkaGVhcnRiZWF0CCRoZWFydGJlYXQkSGVhcnRiZWF0KF9zaWduYXR1cmUkU2lnbmF0dXJlJCgjIDx3ZWlnaHQ+PQEtIENvbXBsZXhpdHk6IGBPKEsgKyBFKWAgd2hlcmUgSyBpcyBsZW5ndGggb2YgYEtleXNgIChoZWFydGJlYXQudmFsaWRhdG9yc19sZW4p9GFuZCBFIGlzIGxlbmd0aCBvZiBgaGVhcnRiZWF0Lm5ldHdvcmtfc3RhdGUuZXh0ZXJuYWxfYWRkcmVzc2CALSBgTyhLKWA6IGRlY29kaW5nIG9mIGxlbmd0aCBgS2CkLSBgTyhFKWA6IGRlY29kaW5nL2VuY29kaW5nIG9mIGxlbmd0aCBgRWA5AS0gRGJSZWFkczogcGFsbGV0X3Nlc3Npb24gYFZhbGlkYXRvcnNgLCBwYWxsZXRfc2Vzc2lvbiBgQ3VycmVudEluZGV4YCwgYEtleXNgLFBgUmVjZWl2ZWRIZWFydGJlYXRzYIAtIERiV3JpdGVzOiBgUmVjZWl2ZWRIZWFydGJlYXRzYCwjIDwvd2VpZ2h0PgAAAAtIQXV0aG9yaXR5RGlzY292ZXJ5AAEAAAAADBBTdWRvAAEQEHN1ZG8EEGNhbGwQQ2FsbAQ1AUF1dGhlbnRpY2F0ZXMgdGhlIHN1ZG8ga2V5IGFuZCBkaXNwYXRjaGVzIGEgZnVuY3Rpb24gY2FsbCB3aXRoIGBSb290YCBvcmlnaW4uVHN1ZG9fdW5jaGVja2VkX3dlaWdodAgQY2FsbBBDYWxsHF93ZWlnaHQYV2VpZ2h0DDUBQXV0aGVudGljYXRlcyB0aGUgc3VkbyBrZXkgYW5kIGRpc3BhdGNoZXMgYSBmdW5jdGlvbiBjYWxsIHdpdGggYFJvb3RgIG9yaWdpbi4tAVRoaXMgZnVuY3Rpb24gZG9lcyBub3QgY2hlY2sgdGhlIHdlaWdodCBvZiB0aGUgY2FsbCwgYW5kIGluc3RlYWQgYWxsb3dzIHRoZbBTdWRvIHVzZXIgdG8gc3BlY2lmeSB0aGUgd2VpZ2h0IG9mIHRoZSBjYWxsLhxzZXRfa2V5BAxuZXcwTG9va3VwU291cmNlBHEBQXV0aGVudGljYXRlcyB0aGUgY3VycmVudCBzdWRvIGtleSBhbmQgc2V0cyB0aGUgZ2l2ZW4gQWNjb3VudElkIChgbmV3YCkgYXMgdGhlIG5ldyBzdWRvIGtleS4cc3Vkb19hcwgMd2hvMExvb2t1cFNvdXJjZRBjYWxsEENhbGwITQFBdXRoZW50aWNhdGVzIHRoZSBzdWRvIGtleSBhbmQgZGlzcGF0Y2hlcyBhIGZ1bmN0aW9uIGNhbGwgd2l0aCBgU2lnbmVkYCBvcmlnaW4gZnJvbUBhIGdpdmVuIGFjY291bnQuAAAADSBUcmVhc3VyeQABRDRwcm9wb3NlX3NwZW5kCBR2YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj4sYmVuZWZpY2lhcnkwTG9va3VwU291cmNlDCkBUHV0IGZvcndhcmQgYSBzdWdnZXN0aW9uIGZvciBzcGVuZGluZy4gQSBkZXBvc2l0IHByb3BvcnRpb25hbCB0byB0aGUgdmFsdWUxAWlzIHJlc2VydmVkIGFuZCBzbGFzaGVkIGlmIHRoZSBwcm9wb3NhbCBpcyByZWplY3RlZC4gSXQgaXMgcmV0dXJuZWQgb25jZSB0aGVQcHJvcG9zYWwgaXMgYXdhcmRlZC48cmVqZWN0X3Byb3Bvc2FsBCxwcm9wb3NhbF9pZFhDb21wYWN0PFByb3Bvc2FsSW5kZXg+BPhSZWplY3QgYSBwcm9wb3NlZCBzcGVuZC4gVGhlIG9yaWdpbmFsIGRlcG9zaXQgd2lsbCBiZSBzbGFzaGVkLkBhcHByb3ZlX3Byb3Bvc2FsBCxwcm9wb3NhbF9pZFhDb21wYWN0PFByb3Bvc2FsSW5kZXg+CFkBQXBwcm92ZSBhIHByb3Bvc2FsLiBBdCBhIGxhdGVyIHRpbWUsIHRoZSBwcm9wb3NhbCB3aWxsIGJlIGFsbG9jYXRlZCB0byB0aGUgYmVuZWZpY2lhcnmoYW5kIHRoZSBvcmlnaW5hbCBkZXBvc2l0IHdpbGwgYmUgcmV0dXJuZWQuOHJlcG9ydF9hd2Vzb21lCBhyZWFzb24UQnl0ZXMMd2hvJEFjY291bnRJZARZAVJlcG9ydCBzb21ldGhpbmcgYHJlYXNvbmAgdGhhdCBkZXNlcnZlcyBhIHRpcCBhbmQgY2xhaW0gYW55IGV2ZW50dWFsIHRoZSBmaW5kZXIncyBmZWUuLHJldHJhY3RfdGlwBBBoYXNoEEhhc2gEUQFSZXRyYWN0IGEgcHJpb3IgdGlwLXJlcG9ydCBmcm9tIGByZXBvcnRfYXdlc29tZWAsIGFuZCBjYW5jZWwgdGhlIHByb2Nlc3Mgb2YgdGlwcGluZy4cdGlwX25ldwwYcmVhc29uFEJ5dGVzDHdobyRBY2NvdW50SWQkdGlwX3ZhbHVlSENvbXBhY3Q8QmFsYW5jZU9mPgTwR2l2ZSBhIHRpcCBmb3Igc29tZXRoaW5nIG5ldzsgbm8gZmluZGVyJ3MgZmVlIHdpbGwgYmUgdGFrZW4uDHRpcAgQaGFzaBBIYXNoJHRpcF92YWx1ZUhDb21wYWN0PEJhbGFuY2VPZj4EsERlY2xhcmUgYSB0aXAgdmFsdWUgZm9yIGFuIGFscmVhZHktb3BlbiB0aXAuJGNsb3NlX3RpcAQQaGFzaBBIYXNoBFxDbG9zZSBhbmQgcGF5b3V0IGEgdGlwLjhwcm9wb3NlX2JvdW50eQgUdmFsdWVIQ29tcGFjdDxCYWxhbmNlT2Y+LGRlc2NyaXB0aW9uFEJ5dGVzBFRQcm9wb3NlIGEgbmV3IGJvdW50eS44YXBwcm92ZV9ib3VudHkEJGJvdW50eV9pZFhDb21wYWN0PFByb3Bvc2FsSW5kZXg+CF0BQXBwcm92ZSBhIGJvdW50eSBwcm9wb3NhbC4gQXQgYSBsYXRlciB0aW1lLCB0aGUgYm91bnR5IHdpbGwgYmUgZnVuZGVkIGFuZCBiZWNvbWUgYWN0aXZlqGFuZCB0aGUgb3JpZ2luYWwgZGVwb3NpdCB3aWxsIGJlIHJldHVybmVkLjxwcm9wb3NlX2N1cmF0b3IMJGJvdW50eV9pZFhDb21wYWN0PFByb3Bvc2FsSW5kZXg+HGN1cmF0b3IwTG9va3VwU291cmNlDGZlZUhDb21wYWN0PEJhbGFuY2VPZj4EkEFzc2lnbiBhIGN1cmF0b3IgdG8gYSBmdW5kZWQgYm91bnR5LkB1bmFzc2lnbl9jdXJhdG9yBCRib3VudHlfaWRYQ29tcGFjdDxQcm9wb3NhbEluZGV4PgR8VW5hc3NpZ24gY3VyYXRvciBmcm9tIGEgYm91bnR5LjhhY2NlcHRfY3VyYXRvcgQkYm91bnR5X2lkWENvbXBhY3Q8UHJvcG9zYWxJbmRleD4IlEFjY2VwdCB0aGUgY3VyYXRvciByb2xlIGZvciBhIGJvdW50eS4pAUEgZGVwb3NpdCB3aWxsIGJlIHJlc2VydmVkIGZyb20gY3VyYXRvciBhbmQgcmVmdW5kIHVwb24gc3VjY2Vzc2Z1bCBwYXlvdXQuMGF3YXJkX2JvdW50eQgkYm91bnR5X2lkWENvbXBhY3Q8UHJvcG9zYWxJbmRleD4sYmVuZWZpY2lhcnkwTG9va3VwU291cmNlBJUBQXdhcmQgYm91bnR5IHRvIGEgYmVuZWZpY2lhcnkgYWNjb3VudC4gVGhlIGJlbmVmaWNpYXJ5IHdpbGwgYmUgYWJsZSB0byBjbGFpbSB0aGUgZnVuZHMgYWZ0ZXIgYSBkZWxheS4wY2xhaW1fYm91bnR5BCRib3VudHlfaWRQQ29tcGFjdDxCb3VudHlJbmRleD4E7ENsYWltIHRoZSBwYXlvdXQgZnJvbSBhbiBhd2FyZGVkIGJvdW50eSBhZnRlciBwYXlvdXQgZGVsYXkuMGNsb3NlX2JvdW50eQQkYm91bnR5X2lkUENvbXBhY3Q8Qm91bnR5SW5kZXg+CDkBQ2FuY2VsIGEgcHJvcG9zZWQgb3IgYWN0aXZlIGJvdW50eS4gQWxsIHRoZSBmdW5kcyB3aWxsIGJlIHNlbnQgdG8gdHJlYXN1cnkgYW5kzHRoZSBjdXJhdG9yIGRlcG9zaXQgd2lsbCBiZSB1bnJlc2VydmVkIGlmIHBvc3NpYmxlLlBleHRlbmRfYm91bnR5X2V4cGlyeQgkYm91bnR5X2lkUENvbXBhY3Q8Qm91bnR5SW5kZXg+HF9yZW1hcmsUQnl0ZXMErEV4dGVuZCB0aGUgZXhwaXJ5IHRpbWUgb2YgYW4gYWN0aXZlIGJvdW50eS4AAAAOHFV0aWxpdHkAAQgUYmF0Y2gEFGNhbGxzJFZlYzxDYWxsPgR8U2VuZCBhIGJhdGNoIG9mIGRpc3BhdGNoIGNhbGxzLjRhc19kZXJpdmF0aXZlCBRpbmRleAx1MTYQY2FsbBBDYWxsBNxTZW5kIGEgY2FsbCB0aHJvdWdoIGFuIGluZGV4ZWQgcHNldWRvbnltIG9mIHRoZSBzZW5kZXIuAAAADyBJZGVudGl0eQABPDRhZGRfcmVnaXN0cmFyBBxhY2NvdW50JEFjY291bnRJZAR4QWRkIGEgcmVnaXN0cmFyIHRvIHRoZSBzeXN0ZW0uMHNldF9pZGVudGl0eQQQaW5mbzBJZGVudGl0eUluZm8EKQFTZXQgYW4gYWNjb3VudCdzIGlkZW50aXR5IGluZm9ybWF0aW9uIGFuZCByZXNlcnZlIHRoZSBhcHByb3ByaWF0ZSBkZXBvc2l0LiBzZXRfc3VicwQQc3Vic1RWZWM8KEFjY291bnRJZCxEYXRhKT4EjFNldCB0aGUgc3ViLWFjY291bnRzIG9mIHRoZSBzZW5kZXIuOGNsZWFyX2lkZW50aXR5AAQ5AUNsZWFyIGFuIGFjY291bnQncyBpZGVudGl0eSBpbmZvIGFuZCBhbGwgc3ViLWFjY291bnRzIGFuZCByZXR1cm4gYWxsIGRlcG9zaXRzLkRyZXF1ZXN0X2p1ZGdlbWVudAgkcmVnX2luZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+HG1heF9mZWVIQ29tcGFjdDxCYWxhbmNlT2Y+BJRSZXF1ZXN0IGEganVkZ2VtZW50IGZyb20gYSByZWdpc3RyYXIuOGNhbmNlbF9yZXF1ZXN0BCRyZWdfaW5kZXg4UmVnaXN0cmFySW5kZXgEaENhbmNlbCBhIHByZXZpb3VzIHJlcXVlc3QuHHNldF9mZWUIFGluZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+DGZlZUhDb21wYWN0PEJhbGFuY2VPZj4EGQFTZXQgdGhlIGZlZSByZXF1aXJlZCBmb3IgYSBqdWRnZW1lbnQgdG8gYmUgcmVxdWVzdGVkIGZyb20gYSByZWdpc3RyYXIuOHNldF9hY2NvdW50X2lkCBRpbmRleFxDb21wYWN0PFJlZ2lzdHJhckluZGV4PgxuZXckQWNjb3VudElkBLxDaGFuZ2UgdGhlIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIGEgcmVnaXN0cmFyLihzZXRfZmllbGRzCBRpbmRleFxDb21wYWN0PFJlZ2lzdHJhckluZGV4PhhmaWVsZHM4SWRlbnRpdHlGaWVsZHMEqFNldCB0aGUgZmllbGQgaW5mb3JtYXRpb24gZm9yIGEgcmVnaXN0cmFyLkRwcm92aWRlX2p1ZGdlbWVudAwkcmVnX2luZGV4XENvbXBhY3Q8UmVnaXN0cmFySW5kZXg+GHRhcmdldDBMb29rdXBTb3VyY2UkanVkZ2VtZW50RElkZW50aXR5SnVkZ2VtZW50BLhQcm92aWRlIGEganVkZ2VtZW50IGZvciBhbiBhY2NvdW50J3MgaWRlbnRpdHkuNGtpbGxfaWRlbnRpdHkEGHRhcmdldDBMb29rdXBTb3VyY2UEQQFSZW1vdmUgYW4gYWNjb3VudCdzIGlkZW50aXR5IGFuZCBzdWItYWNjb3VudCBpbmZvcm1hdGlvbiBhbmQgc2xhc2ggdGhlIGRlcG9zaXRzLhxhZGRfc3ViCAxzdWIwTG9va3VwU291cmNlEGRhdGEQRGF0YQSsQWRkIHRoZSBnaXZlbiBhY2NvdW50IHRvIHRoZSBzZW5kZXIncyBzdWJzLihyZW5hbWVfc3ViCAxzdWIwTG9va3VwU291cmNlEGRhdGEQRGF0YQTMQWx0ZXIgdGhlIGFzc29jaWF0ZWQgbmFtZSBvZiB0aGUgZ2l2ZW4gc3ViLWFjY291bnQuKHJlbW92ZV9zdWIEDHN1YjBMb29rdXBTb3VyY2UEwFJlbW92ZSB0aGUgZ2l2ZW4gYWNjb3VudCBmcm9tIHRoZSBzZW5kZXIncyBzdWJzLiBxdWl0X3N1YgAEjFJlbW92ZSB0aGUgc2VuZGVyIGFzIGEgc3ViLWFjY291bnQuAAAAEEhUcmFuc2FjdGlvblBheW1lbnQAAAAAABEgTXVsdGlzaWcAARBQYXNfbXVsdGlfdGhyZXNob2xkXzEIRG90aGVyX3NpZ25hdG9yaWVzOFZlYzxBY2NvdW50SWQ+EGNhbGwQQ2FsbARRAUltbWVkaWF0ZWx5IGRpc3BhdGNoIGEgbXVsdGktc2lnbmF0dXJlIGNhbGwgdXNpbmcgYSBzaW5nbGUgYXBwcm92YWwgZnJvbSB0aGUgY2FsbGVyLiBhc19tdWx0aRgkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPjxtYXliZV90aW1lcG9pbnRET3B0aW9uPFRpbWVwb2ludD4QY2FsbChPcGFxdWVDYWxsKHN0b3JlX2NhbGwQYm9vbChtYXhfd2VpZ2h0GFdlaWdodAhVAVJlZ2lzdGVyIGFwcHJvdmFsIGZvciBhIGRpc3BhdGNoIHRvIGJlIG1hZGUgZnJvbSBhIGRldGVybWluaXN0aWMgY29tcG9zaXRlIGFjY291bnQgaWb4YXBwcm92ZWQgYnkgYSB0b3RhbCBvZiBgdGhyZXNob2xkIC0gMWAgb2YgYG90aGVyX3NpZ25hdG9yaWVzYC5AYXBwcm92ZV9hc19tdWx0aRQkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPjxtYXliZV90aW1lcG9pbnRET3B0aW9uPFRpbWVwb2ludD4kY2FsbF9oYXNoHFt1ODszMl0obWF4X3dlaWdodBhXZWlnaHQIVQFSZWdpc3RlciBhcHByb3ZhbCBmb3IgYSBkaXNwYXRjaCB0byBiZSBtYWRlIGZyb20gYSBkZXRlcm1pbmlzdGljIGNvbXBvc2l0ZSBhY2NvdW50IGlm+GFwcHJvdmVkIGJ5IGEgdG90YWwgb2YgYHRocmVzaG9sZCAtIDFgIG9mIGBvdGhlcl9zaWduYXRvcmllc2AuPGNhbmNlbF9hc19tdWx0aRAkdGhyZXNob2xkDHUxNkRvdGhlcl9zaWduYXRvcmllczhWZWM8QWNjb3VudElkPiR0aW1lcG9pbnQkVGltZXBvaW50JGNhbGxfaGFzaBxbdTg7MzJdCFUBQ2FuY2VsIGEgcHJlLWV4aXN0aW5nLCBvbi1nb2luZyBtdWx0aXNpZyB0cmFuc2FjdGlvbi4gQW55IGRlcG9zaXQgcmVzZXJ2ZWQgcHJldmlvdXNsecRmb3IgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB1bnJlc2VydmVkIG9uIHN1Y2Nlc3MuAAAAEmBSYW5kb21uZXNzQ29sbGVjdGl2ZUZsaXAAAAAAABMoSGlzdG9yaWNhbAAAAAAAFBhDZW5uengAARQkYnV5X2Fzc2V0FCRyZWNpcGllbnRET3B0aW9uPEFjY291bnRJZD40YXNzZXRfdG9fc2VsbEBDb21wYWN0PEFzc2V0SWQ+MGFzc2V0X3RvX2J1eUBDb21wYWN0PEFzc2V0SWQ+KGJ1eV9hbW91bnRIQ29tcGFjdDxCYWxhbmNlT2Y+MG1heGltdW1fc2VsbEhDb21wYWN0PEJhbGFuY2VPZj4IoEJ1eSBgYXNzZXRfdG9fYnV5YCB3aXRoIGBhc3NldF90b19zZWxsYC4pAUNhbGxlciBzcGVjaWZpZXMgYW4gZXhhY3QgYGJ1eV9hbW91bnRgIGFuZCBhIGBtYXhpbXVtX3NlbGxgIGFtb3VudCB0byBwYXkuKHNlbGxfYXNzZXQUJHJlY2lwaWVudERPcHRpb248QWNjb3VudElkPjRhc3NldF90b19zZWxsQENvbXBhY3Q8QXNzZXRJZD4wYXNzZXRfdG9fYnV5QENvbXBhY3Q8QXNzZXRJZD4sc2VsbF9hbW91bnRIQ29tcGFjdDxCYWxhbmNlT2Y+LG1pbmltdW1fYnV5SENvbXBhY3Q8QmFsYW5jZU9mPgigU2VsbCBgYXNzZXRfdG9fc2VsbGAgZm9yIGBhc3NldF90b19idXlgLjkBQ2FsbGVyIHNwZWNpZmllcyBhbiBleGFjdCBgc2VsbF9hbW91bnRgIGFuZCBhIGBtaW5pbXVtX2J1eWAgYW1vdW50IHRvIHJlY2VpdmUuNGFkZF9saXF1aWRpdHkQIGFzc2V0X2lkQENvbXBhY3Q8QXNzZXRJZD40bWluX2xpcXVpZGl0eUhDb21wYWN0PEJhbGFuY2VPZj5AbWF4X2Fzc2V0X2Ftb3VudEhDb21wYWN0PEJhbGFuY2VPZj4sY29yZV9hbW91bnRIQ29tcGFjdDxCYWxhbmNlT2Y+CBUBRGVwb3NpdCBjb3JlIGFzc2V0IGFuZCB0cmFkZSBhc3NldCBhdCBjdXJyZW50IHJhdGlvIHRvIG1pbnQgbGlxdWlkaXR5jFJldHVybnMgYW1vdW50IG9mIGxpcXVpZGl0eSBtaW50ZWQuQHJlbW92ZV9saXF1aWRpdHkQIGFzc2V0X2lkQENvbXBhY3Q8QXNzZXRJZD5UbGlxdWlkaXR5X3RvX3dpdGhkcmF3SENvbXBhY3Q8QmFsYW5jZU9mPkhtaW5fYXNzZXRfd2l0aGRyYXdIQ29tcGFjdDxCYWxhbmNlT2Y+RG1pbl9jb3JlX3dpdGhkcmF3SENvbXBhY3Q8QmFsYW5jZU9mPgQxAUJ1cm4gZXhjaGFuZ2UgYXNzZXRzIHRvIHdpdGhkcmF3IGNvcmUgYXNzZXQgYW5kIHRyYWRlIGFzc2V0IGF0IGN1cnJlbnQgcmF0aW8wc2V0X2ZlZV9yYXRlBDBuZXdfZmVlX3JhdGUcRmVlUmF0ZQS8U2V0IHRoZSBzcG90IGV4Y2hhbmdlIHdpZGUgZmVlIHJhdGUgKHJvb3Qgb25seSkAAAAVKFN5bG9Hcm91cHMAAQAAAAAWIFN5bG9FMkVFAAEAAAAAFyhTeWxvRGV2aWNlAAEAAAAAGCRTeWxvSW5ib3gAAQAAAAAZMFN5bG9SZXNwb25zZQABAAAAABokU3lsb1ZhdWx0AAEAAAAAGyxBdHRlc3RhdGlvbgABCCRzZXRfY2xhaW0MGGhvbGRlciRBY2NvdW50SWQUdG9waWNAQXR0ZXN0YXRpb25Ub3BpYxR2YWx1ZUBBdHRlc3RhdGlvblZhbHVlDIhDcmVhdGUgb3IgdXBkYXRlIGFuIGV4aXN0aW5nIGNsYWlt7FRoZSBgaXNzdWVyYCBvZiB0aGUgY2xhaW0gY29tZXMgZnJvbSB0aGUgZXh0cmluc2ljIGBvcmlnaW5gOQFUaGUgYHRvcGljYCBhbmQgYHZhbHVlYCBhcmUgYm90aCBVMjU2IHdoaWNoIGNhbiBob2xkIGFueSAzMi1ieXRlIGVuY29kZWQgZGF0YS4wcmVtb3ZlX2NsYWltCBhob2xkZXIkQWNjb3VudElkFHRvcGljQEF0dGVzdGF0aW9uVG9waWMI7FJlbW92ZSBhIGNsYWltLCBvbmx5IHRoZSBvcmlnaW5hbCBpc3N1ZXIgY2FuIHJlbW92ZSBhIGNsYWltXQFJZiB0aGUgYGlzc3VlcmAgaGFzIG5vdCB5ZXQgaXNzdWVkIGEgY2xhaW0gb2YgYHRvcGljYCwgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBlcnJvci4AAAAcHFJld2FyZHMAAQxIc2V0X2luZmxhdGlvbl9yYXRlCCRudW1lcmF0b3IMdTY0LGRlbm9taW5hdG9yDHU2NAhRAVNldCB0aGUgcGVyIHBheW91dCBpbmZsYXRpb24gcmF0ZSAoYG51bWVyYXRvcmAgLyBgZGVub21pbmF0b3JgKSAoaXQgbWF5IGJlIG5lZ2F0aXZlKWUBUGxlYXNlIGJlIGFkdmlzZWQgdGhhdCBhIG5ld2x5IHNldCBpbmZsYXRpb24gcmF0ZSB3b3VsZCBvbmx5IGFmZmVjdCB0aGUgbmV4dCBmaXNjYWwgeWVhci5kc2V0X2RldmVsb3BtZW50X2Z1bmRfdGFrZQRAbmV3X3Rha2VfcGVyY2VudAx1MzIEwFNldCB0aGUgZGV2ZWxvcG1lbnQgZnVuZCB0YWtlICUsIGNhcHBlZCBhdCAxMDAlLlBmb3JjZV9uZXdfZmlzY2FsX2VyYQAEAQFGb3JjZSBhIG5ldyBmaXNjYWwgZXJhIHRvIHN0YXJ0IGFzIHNvb24gYXMgdGhlIG5leHQgc3Rha2luZyBlcmEuAAAAHQxOZnQAAUAkc2V0X293bmVyCDRjb2xsZWN0aW9uX2lkMENvbGxlY3Rpb25JZCRuZXdfb3duZXIkQWNjb3VudElkCHRTZXQgdGhlIG93bmVyIG9mIGEgY29sbGVjdGlvbqxDYWxsZXIgbXVzdCBiZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG93bmVyRGNyZWF0ZV9jb2xsZWN0aW9uDBBuYW1lSENvbGxlY3Rpb25OYW1lVHlwZURtZXRhZGF0YV9iYXNlX3VyaVxPcHRpb248TWV0YWRhdGFCYXNlVVJJPkhyb3lhbHRpZXNfc2NoZWR1bGVkT3B0aW9uPFJveWFsdGllc1NjaGVkdWxlPgR0Q3JlYXRlIGEgbmV3IHRva2VuIGNvbGxlY3Rpb24sbWludF91bmlxdWUUNGNvbGxlY3Rpb25faWQwQ29sbGVjdGlvbklkFG93bmVyRE9wdGlvbjxBY2NvdW50SWQ+KGF0dHJpYnV0ZXNYVmVjPE5GVEF0dHJpYnV0ZVZhbHVlPjRtZXRhZGF0YV9wYXRoNE9wdGlvbjxCeXRlcz5Icm95YWx0aWVzX3NjaGVkdWxlZE9wdGlvbjxSb3lhbHRpZXNTY2hlZHVsZT4EZE1pbnQgYSBzaW5nbGUgdG9rZW4gKE5GVCksbWludF9zZXJpZXMYNGNvbGxlY3Rpb25faWQwQ29sbGVjdGlvbklkIHF1YW50aXR5KFRva2VuQ291bnQUb3duZXJET3B0aW9uPEFjY291bnRJZD4oYXR0cmlidXRlc1hWZWM8TkZUQXR0cmlidXRlVmFsdWU+NG1ldGFkYXRhX3BhdGg0T3B0aW9uPEJ5dGVzPkhyb3lhbHRpZXNfc2NoZWR1bGVkT3B0aW9uPFJveWFsdGllc1NjaGVkdWxlPggVAU1pbnQgYSBzZXJpZXMgb2YgdG9rZW5zIGRpc3Rpbmd1aXNoYWJsZSBvbmx5IGJ5IGEgc2VyaWFsIG51bWJlciAoU0ZUKfRTZXJpZXMgY2FuIGJlIGlzc3VlZCBhZGRpdGlvbmFsIHRva2VucyB3aXRoIGBtaW50X2FkZGl0aW9uYWxgPG1pbnRfYWRkaXRpb25hbBA0Y29sbGVjdGlvbl9pZDBDb2xsZWN0aW9uSWQkc2VyaWVzX2lkIFNlcmllc0lkIHF1YW50aXR5KFRva2VuQ291bnQUb3duZXJET3B0aW9uPEFjY291bnRJZD4IsE1pbnQgYWRkaXRpb25hbCB0b2tlbnMgdG8gYW4gZXhpc3Rpbmcgc2VyaWVzvEl0IHdpbGwgZmFpbCBpZiB0aGUgc2VyaWVzIGlzIG5vdCBzZW1pLWZ1bmdpYmxlIHRyYW5zZmVyCCB0b2tlbl9pZBxUb2tlbklkJG5ld19vd25lciRBY2NvdW50SWQIcFRyYW5zZmVyIG93bmVyc2hpcCBvZiBhbiBORlR4Q2FsbGVyIG11c3QgYmUgdGhlIHRva2VuIG93bmVyOHRyYW5zZmVyX2JhdGNoCBh0b2tlbnMwVmVjPFRva2VuSWQ+JG5ld19vd25lciRBY2NvdW50SWQMuFRyYW5zZmVyIG93bmVyc2hpcCBvZiBhIGJhdGNoIG9mIE5GVHMgKGF0b21pYymcVG9rZW5zIG11c3QgYmUgZnJvbSB0aGUgc2FtZSBjb2xsZWN0aW9ueENhbGxlciBtdXN0IGJlIHRoZSB0b2tlbiBvd25lchBidXJuBCB0b2tlbl9pZBxUb2tlbklkBERCdXJuIGEgdG9rZW4g8J+UpShidXJuX2JhdGNoDDRjb2xsZWN0aW9uX2lkMENvbGxlY3Rpb25JZCRzZXJpZXNfaWQgU2VyaWVzSWQ4c2VyaWFsX251bWJlcnNEVmVjPFNlcmlhbE51bWJlcj4IVEJ1cm4gc29tZSB0b2tlbnMg8J+UpchUb2tlbnMgbXVzdCBiZSBmcm9tIHRoZSBzYW1lIGNvbGxlY3Rpb24gYW5kIHNlcmllcxBzZWxsFCB0b2tlbl9pZBxUb2tlbklkFGJ1eWVyRE9wdGlvbjxBY2NvdW50SWQ+NHBheW1lbnRfYXNzZXQcQXNzZXRJZCxmaXhlZF9wcmljZRxCYWxhbmNlIGR1cmF0aW9uTE9wdGlvbjxCbG9ja051bWJlcj4EkFNlbGwgYSBzaW5nbGUgdG9rZW4gYXQgYSBmaXhlZCBwcmljZSxzZWxsX2J1bmRsZRQYdG9rZW5zMFZlYzxUb2tlbklkPhRidXllckRPcHRpb248QWNjb3VudElkPjRwYXltZW50X2Fzc2V0HEFzc2V0SWQsZml4ZWRfcHJpY2UcQmFsYW5jZSBkdXJhdGlvbkxPcHRpb248QmxvY2tOdW1iZXI+DKBTZWxsIGEgYnVuZGxlIG9mIHRva2VucyBhdCBhIGZpeGVkIHByaWNlpC0gVG9rZW5zIG11c3QgYmUgZnJvbSB0aGUgc2FtZSBjb2xsZWN0aW9uMQEtIFRva2VucyB3aXRoIGluZGl2aWR1YWwgcm95YWx0aWVzIHNjaGVkdWxlcyBjYW5ub3QgYmUgc29sZCB3aXRoIHRoaXMgbWV0aG9kDGJ1eQQobGlzdGluZ19pZCRMaXN0aW5nSWQErEJ1eSBhIHRva2VuIGxpc3RpbmcgZm9yIGl0cyBzcGVjaWZpZWQgcHJpY2UcYXVjdGlvbhAgdG9rZW5faWQcVG9rZW5JZDRwYXltZW50X2Fzc2V0HEFzc2V0SWQ0cmVzZXJ2ZV9wcmljZRxCYWxhbmNlIGR1cmF0aW9uTE9wdGlvbjxCbG9ja051bWJlcj4E4EF1Y3Rpb24gYSB0b2tlbiBvbiB0aGUgb3BlbiBtYXJrZXQgdG8gdGhlIGhpZ2hlc3QgYmlkZGVyOGF1Y3Rpb25fYnVuZGxlEBh0b2tlbnMwVmVjPFRva2VuSWQ+NHBheW1lbnRfYXNzZXQcQXNzZXRJZDRyZXNlcnZlX3ByaWNlHEJhbGFuY2UgZHVyYXRpb25MT3B0aW9uPEJsb2NrTnVtYmVyPgwNAUF1Y3Rpb24gYSBidW5kbGUgb2YgdG9rZW5zIG9uIHRoZSBvcGVuIG1hcmtldCB0byB0aGUgaGlnaGVzdCBiaWRkZXKkLSBUb2tlbnMgbXVzdCBiZSBmcm9tIHRoZSBzYW1lIGNvbGxlY3Rpb24ZAS0gVG9rZW5zIHdpdGggaW5kaXZpZHVhbCByb3lhbHRpZXMgc2NoZWR1bGVzIGNhbm5vdCBiZSBzb2xkIGluIGJ1bmRsZXMMYmlkCChsaXN0aW5nX2lkJExpc3RpbmdJZBhhbW91bnQcQmFsYW5jZQh4UGxhY2UgYSBiaWQgb24gYW4gb3BlbiBhdWN0aW9u7C0gYGFtb3VudGAgdG8gYmlkIChpbiB0aGUgc2VsbGVyJ3MgcmVxdWVzdGVkIHBheW1lbnQgYXNzZXQpLGNhbmNlbF9zYWxlBChsaXN0aW5nX2lkJExpc3RpbmdJZAygQ2xvc2UgYSBzYWxlIG9yIGF1Y3Rpb24gcmV0dXJuaW5nIHRva2Vuc+hSZXF1aXJlcyBubyBzdWNjZXNzZnVsIGJpZHMgaGF2ZSBiZWVuIG1hZGUgZm9yIGFuIGF1Y3Rpb24ugENhbGxlciBtdXN0IGJlIHRoZSBsaXN0ZWQgc2VsbGVyAAAAHgQcQENoZWNrU3BlY1ZlcnNpb244Q2hlY2tUeFZlcnNpb24wQ2hlY2tHZW5lc2lzOENoZWNrTW9ydGFsaXR5KENoZWNrTm9uY2UsQ2hlY2tXZWlnaHRgQ2hhcmdlVHJhbnNhY3Rpb25QYXltZW50",
  "ss58Format": 42,
  "tokenDecimals": 4,
  "tokenSymbol": "CENNZ",
  "types": {
    "AttestationTopic": "u256",
    "AttestationValue": "u256",
    "ExchangeKey": "(AssetId, AssetId)",
    "FeeRate": "u128",
    "AssetOptions": {
      "initialIssuance": "Compact<Balance>",
      "permissions": "PermissionLatest"
    },
    "AssetInfo": {
      "symbol": "Vec<u8>",
      "decimalPlaces": "u8"
    },
    "Owner": {
      "_enum": {
        "None": "Null",
        "Address": "AccountId"
      }
    },
    "PermissionsV1": {
      "update": "Owner",
      "mint": "Owner",
      "burn": "Owner"
    },
    "PermissionVersions": {
      "_enum": {
        "V1": "PermissionsV1"
      }
    },
    "PermissionLatest": "PermissionsV1",
    "WithdrawReasons": {
      "_set": {
        "TransactionPayment": 1,
        "Transfer": 2,
        "Reserve": 4,
        "Fee": 8,
        "Tip": 16
      }
    },
    "BalanceLock": {
      "id": "LockIdentifier",
      "amount": "Balance",
      "reasons": "WithdrawReasons"
    },
    "TokenId": "(CollectionId, SeriesId, SerialNumber)",
    "AuctionClosureReason": {
      "_enum": {
        "ExpiredNoBids": null,
        "SettlementFailed": null,
        "VendorCancelled": null
      }
    },
    "AuctionListing": {
      "paymentAsset": "AssetId",
      "reservePrice": "Balance",
      "close": "BlockNumber",
      "seller": "AccountId",
      "tokens": "Vec<TokenId>",
      "royaltiesSchedule": "RoyaltiesSchedule"
    },
    "CollectionId": "u32",
    "CollectionNameType": "Vec<u8>",
    "FixedPriceListing": {
      "paymentAsset": "AssetId",
      "fixedPrice": "Balance",
      "close": "BlockNumber",
      "buyer": "Option<AccountId>",
      "seller": "AccountId",
      "tokens": "Vec<TokenId>",
      "royaltiesSchedule": "RoyaltiesSchedule"
    },
    "Listing": {
      "_enum": {
        "FixedPrice": "FixedPriceListing",
        "Auction": "AuctionListing"
      }
    },
    "ListingId": "u128",
    "MetadataBaseURI": {
      "_enum": {
        "Ipfs": null,
        "Https": "Vec<u8>"
      }
    },
    "NFTAttributeValue": {
      "_enum": {
        "i32": "i32",
        "u8": "u8",
        "u16": "u16",
        "u32": "u32",
        "u64": "u64",
        "u128": "u128",
        "Bytes32": "[u8; 32]",
        "Bytes": "Bytes",
        "String": "String",
        "Hash": "[u8; 32]",
        "Timestamp": "u64",
        "Url": "String"
      }
    },
    "Reason": "AuctionClosureReason",
    "RoyaltiesSchedule": {
      "entitlements": "Vec<(AccountId, Permill)>"
    },
    "SeriesId": "u32",
    "SerialNumber": "u32",
    "TokenCount": "u32",
    "RewardBalance": "Balance",
    "RewardBalanceOf": "Balance",
    "RewardDestination": {
      "_enum": {
        "Stash": "Null",
        "Controller": "Null",
        "Account": "AccountId"
      }
    },
    "VecDeque": "Vec<u64>",
    "Meta": "Vec<(Text, Text)>",
    "MemberRoles": {
      "_enum": [
        "AdminRole",
        "MemberRole"
      ]
    },
    "Member": {
      "_alias": {
        "userId": "user_id"
      },
      "userId": "AccountId",
      "roles": "Vec<MemberRoles>",
      "meta": "Meta"
    },
    "Group": {
      "_alias": {
        "groupId": "group_id"
      },
      "groupId": "H256",
      "members": "Vec<Member>",
      "invites": "Vec<PendingInvite>",
      "meta": "Meta"
    },
    "Invite": {
      "_alias": {
        "peerId": "peer_id",
        "inviteData": "invite_data",
        "inviteKey": "invite_key"
      },
      "peerId": "AccountId",
      "inviteData": "Bytes",
      "inviteKey": "H256",
      "meta": "Meta",
      "roles": "Vec<MemberRoles>"
    },
    "PendingInvite": {
      "_alias": {
        "inviteKey": "invite_key"
      },
      "inviteKey": "H256",
      "meta": "Meta",
      "roles": "Vec<MemberRoles>"
    },
    "AcceptPayload": {
      "accountId": "AccountId"
    },
    "DeviceId": "u32",
    "PreKeyBundle": "Bytes",
    "DeviceIdResponse": "DeviceId",
    "WithdrawnPreKeyBundle": "(AccountId, u32, Bytes)",
    "PreKeyBundlesResponse": "Vec<WithdrawnPreKeyBundle>",
    "Response": {
      "_enum": {
        "DeviceIdResponse": "DeviceIdResponse",
        "PreKeyBundlesResponse": "PreKeyBundlesResponse"
      }
    },
    "VaultKey": "Bytes",
    "VaultValue": "Bytes",
    "MessageId": "u32",
    "Message": "Bytes",
    "Address": "AccountId",
    "Index": "u64",
    "doughnut": "Raw",
    "PhaseTo36": {
      "_enum": {
        "ApplyExtrinsic": "u32",
        "Finalization": "Null"
      }
    },
    "DispatchClassTo36": {
      "_enum": [
        "Normal",
        "Operational"
      ]
    },
    "WeightTo36": "u32",
    "DispatchInfoTo36": {
      "weight": "WeightTo36",
      "class": "DispatchClassTo36",
      "paysFee": "bool"
    },
    "FeeExchangeV1": {
      "assetId": "Compact<AssetId>",
      "maxPayment": "Compact<Balance>"
    },
    "FeeExchange": {
      "_enum": {
        "FeeExchangeV1": "FeeExchangeV1"
      }
    },
    "ChargeTransactionPayment": {
      "tip": "Compact<Balance>",
      "feeExchange": "Option<FeeExchange>"
    }
  },
  "userExtensions": {
    "ChargeTransactionPayment": {
      "payload": {},
      "extrinsic": {
        "transactionPayment": "ChargeTransactionPayment"
      }
    },
    "CheckEra": {
      "payload": {
        "blockHash": "Hash"
      },
      "extrinsic": {
        "era": "ExtrinsicEra"
      }
    },
    "CheckGenesis": {
      "payload": {
        "genesisHash": "Hash"
      },
      "extrinsic": {}
    },
    "CheckNonce": {
      "payload": {},
      "extrinsic": {
        "nonce": "Compact<Index>"
      }
    },
    "CheckSpecVersion": {
      "payload": {
        "specVersion": "u32"
      },
      "extrinsic": {}
    },
    "CheckTxVersion": {
      "payload": {
        "transactionVersion": "u32"
      },
      "extrinsic": {}
    }
  }
};
const nikau = {
  "chain": "CENNZnet Nikau",
  "genesisHash": "0xc65170707265757d8a1fb8e039062286b8f0092f2984f5938588bd8e0f21ca2e",
  "specVersion": 40,
  ...commomTypes
} as unknown as MetadataDef;
const rata = {
  "chain": "CENNZnet Rata",
  "genesisHash": "0x6e763e15d54a416badf701858d8ac2264b153fdff86c12294ad345b47d6dec90",
  "specVersion": 40,
  ...commomTypes
} as unknown as MetadataDef;
const azalea = {
  "chain": "CENNZnet Azalea",
  "genesisHash": "0x0d0971c150a9741b8719b3c6c9c2e96ec5b2e3fb83641af868e6650f3e263ef0",
  "specVersion": 40,
  ...commomTypes
} as unknown as MetadataDef;
const develop = {
  "chain": "Development",
  "genesisHash": "0xba29ccef64182e17dee0f9d8bbaddc69e439acdc9409149e5c409d696c14232e",
  "specVersion": 40,
  ...commomTypes
} as unknown as MetadataDef;
const defaultConfig = {
  CENNZNetChain: [nikau, rata, azalea, develop]
};

export default defaultConfig;
