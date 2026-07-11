"use client";

import * as React from "react";
import { Download, Plus, Save, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { buildPrintHtml } from "./printHtml";
import { saveTrip } from "@/lib/plan-storage";
import type { GeneratedPlan } from "@/lib/types";

interface Props {
  plan: GeneratedPlan;
  onNewTrip: () => void;
  onSaved?: () => void;
}

export function PlanActions({ plan, onNewTrip, onSaved }: Props) {
  const { toast } = useToast();
  const [saved, setSaved] = React.useState(false);

  const handleDownload = () => {
    const html = buildPrintHtml(plan);
    const win = window.open("", "_blank");
    if (!win) {
      toast({
        title: "Pop-up blocked",
        description: "Please allow pop-ups to download your plan as PDF.",
        variant: "destructive",
      });
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
  };

  const handleShare = async () => {
    const s = plan.summary;
    const lines = [
      `🧳 Trip Planify — ${s.destination}`,
      `${s.tripTypeLabel} · ${s.durationLabel || s.duration + " days"} · ${s.vehicle}`,
      `💰 Total: ${plan.expenses.currency} ${plan.expenses.total.toLocaleString()} (${s.budgetStyle})`,
      ``,
      `Top picks: ${(plan.placesToVisit?.topPicks || []).slice(0, 4).map((p) => p.name).join(", ")}`,
      ``,
      `Generated with Trip Planify.`,
    ].join("\n");
    try {
      if (navigator.share) {
        await navigator.share({ title: `Trip Plan — ${s.destination}`, text: lines });
      } else {
        await navigator.clipboard.writeText(lines);
        toast({ title: "Copied!", description: "Trip summary copied to clipboard." });
      }
    } catch {
      toast({ title: "Share cancelled", description: "No worries — you can download the PDF instead." });
    }
  };

  const handleSave = () => {
    saveTrip(plan);
    setSaved(true);
    onSaved?.();
    toast({ title: "Trip saved", description: "Find it later in “Saved trips”." });
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
      <Button onClick={handleDownload} className="bg-primary w-full sm:w-auto">
        <Download className="mr-2 h-4 w-4" />
        <span className="sm:inline">Download PDF</span>
        <span className="sm:hidden">PDF</span>
      </Button>
      <Button variant="outline" onClick={handleShare} className="w-full sm:w-auto">
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      <Button variant="outline" onClick={handleSave} disabled={saved} className="w-full sm:w-auto">
        <Save className="mr-2 h-4 w-4" />
        {saved ? "Saved" : "Save"}
      </Button>
      <Button variant="ghost" onClick={onNewTrip} className="w-full sm:w-auto sm:ml-auto">
        <Plus className="mr-2 h-4 w-4" />
        New trip
      </Button>
    </div>
  );
}
