import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, AlertCircle, Camera } from "lucide-react";

const QRScanner: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const scannerRef = useRef<QrScanner | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        scannerRef.current = new QrScanner(
            videoRef.current,
            () => {}, // Empty callback as we're not using actual QR detection
            {
                preferredCamera: 'environment',
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        );

        return () => {
            scannerRef.current?.destroy();
        };
    }, []);

    const handleScan = async () => {
        setIsScanning(true);
        setResult(null);

        // Start camera if not already started
        try {
            await scannerRef.current?.start();
        } catch (error) {
            console.error('Camera error:', error);
        }

        // Fake scanning animation for 2 seconds
        setTimeout(() => {
            // 60% chance of being safe
            const isSafe = Math.random() < 0.6;
            setResult(isSafe ? "✅ Safe QR Code!" : "❌ Scam Detected!");
            setIsScanning(false);
        }, 2000);
    };

    const resetScanner = () => {
        setResult(null);
        setIsScanning(false);
    };

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">QR Scanner</CardTitle>
                    <CardDescription className="text-center text-xl font-bold">
                        {isScanning ? "Scanning..." : result || "Press Scan to check QR code"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-lg bg-black">
                        <video 
                            ref={videoRef} 
                            className="w-full h-full object-cover"
                        />
                        {/* Scanning animation overlay */}
                        {isScanning && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 border-2 border-white rounded-lg animate-pulse">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 animate-[scan_2s_linear_infinite]"></div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <Button 
                        onClick={result ? resetScanner : handleScan}
                        className="w-full text-lg py-6"
                        variant={result?.includes("Safe") ? "default" : result?.includes("Scam") ? "destructive" : "default"}
                        disabled={isScanning}
                    >
                        {isScanning ? (
                            <div className="flex items-center">
                                <span className="animate-pulse">Scanning...</span>
                            </div>
                        ) : result ? (
                            <>
                                {result.includes("Safe") ? (
                                    <CheckCircle2 className="mr-2 h-5 w-5" />
                                ) : (
                                    <AlertCircle className="mr-2 h-5 w-5" />
                                )}
                                Scan Again
                            </>
                        ) : (
                            <>
                                <Camera className="mr-2 h-5 w-5" />
                                SCAN
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default QRScanner; 